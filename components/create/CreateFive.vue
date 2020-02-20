<template>
  <div>
    <div class="progressBar">
      <div class="progress"></div>
    </div>
    <div class="createContent d-flex">
      <div class="createContainer">
        <h2 class="createStep">{{ step }}/6단계</h2>
        <h1 class="createTitle">추가 옵션 선택</h1>
        <div class="createSectrd sectrdMargin">
          2/3위 추가 선정을 하고 싶으신가요?
        </div>
        <div class="createSectrdDesc">
          2/3위 상금을 추가하시면 디자이너 참여가 늘어납니다.
        </div>
        <v-radio-group class="radioGroupMargin">
          <v-radio color="azure">
            <template v-slot:label>
              <div class="createRadioLabel">
                네, 추가 선정하겠습니다.
              </div>
            </template>
          </v-radio>
          <v-radio color="azure" class="sectrdRadio">
            <template v-slot:label>
              <div class="createRadioLabel">
                아니요, 하지 않겠습니다.
              </div>
            </template>
          </v-radio>
        </v-radio-group>
        <div class="createSectrd">
          공모전 진행 기간을 선택해주세요.
        </div>
        <div class="createSectrdDesc">
          디자이너분들이 공모전에 참여 가능한 총 기간을 선택해 주세요.
        </div>
        <v-radio-group class="radioGroupMargin">
          <v-radio color="azure">
            <template v-slot:label>
              <div class="createRadioLabel">
                1주일 (기본)
              </div>
            </template>
          </v-radio>
          <v-radio color="azure" class="sectrdRadio">
            <template v-slot:label>
              <div class="createRadioLabel">
                1주 연장 (총2주/100,000원)
              </div>
            </template>
          </v-radio>
          <v-radio color="azure" class="sectrdRadio">
            <template v-slot:label>
              <div class="createRadioLabel">
                3주 연장 (총4주/200,000원)
              </div>
            </template>
          </v-radio>
        </v-radio-group>
        <div class="createSectrd">
          노출옵션 선택 (중복 선택 가능)
        </div>
        <div class="createSectrdDesc">
          공모전에 보다 많은 디자이너분들이 참여하실 수 있도록 다양한 옵션을
          설정할 수 있습니다. 각 옵션 별 세부 내용을 확인한 후 원하시는 옵션을
          선택해 주세요.
        </div>
        <v-radio-group>
          <v-radio
            v-for="item in options"
            :key="item.title"
            color="azure"
            class="radioBorder"
          >
            <template v-slot:label>
              <div>
                <div class="createRadioLabel">
                  {{ item.title }}
                </div>
                <div class="createSectrdDesc">
                  {{ item.desc }}
                </div>
              </div>
            </template>
          </v-radio>
        </v-radio-group>
      </div>
    </div>
    <div class="createBorder"></div>
    <div class="createBtn">
      <a v-if="step !== 1" @click="onClickPrev" class="createPrevBtn">이전</a>
      <div v-else />
      <a v-if="step !== 6" @click="onClickNext" class="createNextBtn">다음</a>
      <div v-else />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          title: '상단 노출 옵션 (선택불가)',
          desc:
            '고객님의 공모전이 리스트 최상위에 위치하게 되어 다른 공모전보다 더욱 많이 노출 됩니다.'
        },
        {
          title: '홍보 배너 게재 *1주 (100,000원)',
          desc:
            '공모전 리스트 상단에 홍보 배너를 게재하여 디자이너 참여도를 크게 높입니다.'
        },
        {
          title: '하이라이트 (선택불가)',
          desc:
            '공모전 리스트의 배경색이 하이라이트 되어 표시됩니다. 보다 많은 디자이너의 참여를 유도할 수 있습니다.'
        },
        {
          title: '상금 100% 지급 (상금 수수료 의뢰인 부담)',
          desc:
            '캐릭터포유는 표시된 상금의 20%를(우승자 세금 포함) 수수료로 공제 후 80%를 디자이너에게 지급합니다. 해당 옵션은 수수료를 고객님이 대신 부담하여 상금의 100%가 디자이너에게 지급됩니다. 디자이너 참여도를 높일 수 있는 옵션입니다.'
        },
        {
          title: '가이드라인 제작 (선택불가)',
          desc:
            '캐릭터포유와 협력하는 디자인 전문 에이전시인 (주)엑스포디자인브랜딩이 우승작품에 대한 전문적인 가이드라인 제작을 지원해드립니다. 가이드라인 구성: 캐릭터 비례 정의, 캐릭터 기본동작, 턴어라운드, 응용동작 6종, 캐릭터 시그니춰'
        },
        {
          title: '이메일 뉴스레터 홍보 (선택불가)',
          desc:
            '캐릭터포유에 등록된 모든 디자이너 회원에게 공모전 정보가 홍보됩니다.'
        }
      ]
    }
  },
  computed: {
    step() {
      return this.$store.state.create.step
    }
  },
  methods: {
    onClickPrev() {
      this.$store.dispatch('create/prevStep')
    },
    onClickNext() {
      this.$store.dispatch('create/nextStep')
    }
  }
}
</script>

<style lang="scss" scoped>
.progressBar {
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
}

.progress {
  width: 80%;
  height: 8px;
  background-color: $azure;
}

.createContent {
  width: 400px;
  left: 0;
  right: 0;
  margin: 0 auto 35px auto;
}

.createStep {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  color: #757575;
  margin-top: 40px;
  text-align: center;
}

.createTitle {
  font-family: 'Noto Sans KR', sans-serif !important;
  font-size: 22px;
  font-weight: bold;
  color: #151515;
  text-align: center;
  margin-top: 38px;
  margin-bottom: 12px;
}

.createSectrd {
  font-family: 'Noto Sans KR', sans-serif !important;
  font-size: 14px;
  line-height: 1.29;
  color: #666666;
}

.sectrdMargin {
  margin-top: 32px;
}

.createSectrdDesc {
  font-family: 'Noto Sans KR', sans-serif !important;
  font-size: 12px;
  line-height: 1.5;
  color: #aaaaaa;
  margin-top: 4px;
}

.createInputMargin {
  margin-bottom: 16px;
}

.createInputLabel {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #666666;
  margin-bottom: 8px;
  line-height: 1.29;
}

.createInputRewardMB {
  margin-bottom: 4px;
}

.createInput {
  width: 100%;
  height: 46px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #222222;
  padding: 11px 0 15px 17px;
  margin-bottom: 8px;
}

.createBorder {
  width: 100%;
  height: 1px;
  background-color: #d8d8d8;
}

.createBtn {
  width: 1200px;
  left: 0;
  right: 0;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}

.createPrevBtn {
  width: 196px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px $azure;
  background-color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: $azure;
  padding: 14px 84px 16px 84px;
}

.createNextBtn {
  width: 196px;
  height: 50px;
  border-radius: 5px;
  background-color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: white;
  padding: 14px 84px 16px 84px;
}

::placeholder {
  color: #c5c5c5;
}

.createTextarea {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #222222;
  padding: 16px 16px 0 16px;
  resize: none;
}

.createFileDesc {
  width: 100%;
  height: 54px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #aaaaaa;
}

.createFilebox label {
  display: inline-block;
  margin-left: 134px;
  padding: 10px;
  color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  vertical-align: middle;
  background-color: white;
  cursor: pointer;
  border: 1px solid $azure;
  border-radius: 5px;
  margin-top: 15px;
}

.createFilebox input[type='file'] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.createFilebox .uploadName {
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  line-height: normal;
  vertical-align: middle;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.57;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-top: 15px;
}

.disabled {
  background-color: #d8d8d8;
  pointer-events: none;
}

.defaultOption {
  pointer-events: none;
}

.createRadioBox {
  width: 400px;
  height: 46px;
  border-radius: 5px;
  border: solid 1px $azure;
  background-color: #ffffff;
}

.createRadio {
  padding-top: 8px;
  padding-left: 16px;
}

.createRadioLabel {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.29;
  color: #000000;
}

.createMarginBottom {
  margin-bottom: 8px;
}

.createMarginLeft {
  margin-left: 8px;
}

.createInputDesc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #aaaaaa;
  margin-bottom: 11px;
}

.createInputRank {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #666666;
  margin-bottom: 11px;
  text-align: right;
}

.sectrdRadio {
  margin-top: 16px;
}

.radioGroupMargin {
  margin-left: 25px;
}

.radioBorder {
  border: solid 1px #dedede;
  padding: 16px;
  border-radius: 5px;
}
</style>
