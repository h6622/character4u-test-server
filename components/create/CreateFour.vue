<template>
  <div>
    <div class="progressBar">
      <div class="progress"></div>
    </div>
    <div class="createContent d-flex">
      <div class="createGap"></div>
      <div class="createContainer">
        <h2 class="createStep">{{ step }}/6단계</h2>
        <h1 class="createTitle">공모전 옵션 및 상금 설정</h1>
        <div class="createDesc">
          원하는 패키지를 선택하세요
        </div>
        <div class="createInputMargin">
          <div class="createInputLabel">기본 옵션</div>
          <div class="createRadioBox">
            <v-radio-group class="ma-0">
              <v-radio color="azure" class="createRadio">
                <template v-slot:label>
                  <div class="createRadioLabel">
                    캐릭터포유 공모전 등록비 10만원
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
          </div>
        </div>
        <div>
          <div class="createInputLabel">공모전 패키지 옵션</div>
          <v-radio-group>
            <div class="d-flex createMarginBottom">
              <create-four-card grade="premium" />
              <create-four-card grade="gold" class="createMarginLeft" />
            </div>
            <div class="d-flex">
              <create-four-card grade="silver" />
              <create-four-card grade="bronze" class="createMarginLeft" />
            </div>
          </v-radio-group>
        </div>
        <div class="createInputMargin">
          <div class="createInputLabel createInputRewardMB">1위 상금 입력</div>
          <div class="createInputDesc">
            상금이 높은 순서대로 리스트 상단에 노출되며, 디자이너의 참여도가
            올라갑니다.
          </div>
          <input
            v-model="reward"
            type="text"
            class="createInput"
            placeholder="예: 1,000,000"
          />
          <div class="createInputRank">
            현재 상금기준 예상 노출 순위:
            <span class="fontAzure"> {N}번째 </span> / 총 {110}개
          </div>
        </div>
      </div>
      <div class="createGap">
        <create-four-float />
      </div>
    </div>
    <div class="createBorder"></div>
    <div class="createBtn">
      <a v-if="step !== 1" @click="onClickPrev" class="createPrevBtn">이전</a>
      <div v-else />
      <a
        v-if="step !== 6"
        @click="onClickNext"
        :class="reward ? '' : 'disabled'"
        class="createNextBtn"
        >다음</a
      >
      <div v-else />
    </div>
  </div>
</template>

<script>
import CreateFourCard from '@/components/create/CreateFourCard'
import CreateFourFloat from '@/components/create/CreateFourFloat'

export default {
  components: {
    CreateFourCard,
    CreateFourFloat
  },
  data() {
    return {
      defaultOption: '캐릭터 포유 공모전 등록비 10만원',
      reward: ''
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
  width: 60%;
  height: 8px;
  background-color: $azure;
}

.createContent {
  width: 960px;
  left: 0;
  right: 0;
  margin: 0 auto 35px auto;
}

.createContainer {
  width: 400px;
}

.createGap {
  width: 280px;
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

.createDesc {
  width: 294px;
  height: 66px;
  font-family: 'Noto Sans KR', sans-serif !important;
  font-size: 14px;
  line-height: 1.57;
  color: #666666;
  text-align: center;
  margin: 0 54px 40px 54px;
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
  color: #222222;
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
</style>
