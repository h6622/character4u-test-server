<template>
  <div>
    <div class="progressBar">
      <div class="progress"></div>
    </div>
    <div class="createContent d-flex">
      <div class="createContainer">
        <h2 class="createStep">{{ step }}/6단계</h2>
        <h1 class="createTitle">결제 및 등록 완료</h1>
        <div class="createInputMargin MT36">
          <div class="createInputLabel">할인코드 입력</div>
          <input
            type="text"
            class="createInput"
            placeholder="할인코드를 입력해주세요"
          />
        </div>
        <div class="createInputMargin">
          <div class="createInputLabel">결제 수단 선택</div>
          <select
            type="text"
            class="createInput selectBox"
            placeholder="할인코드를 입력해주세요"
          >
            <option>신용카드</option>
            <option>무통장 입금</option>
            <option>실시간 계좌이체</option>
          </select>
          <div class="createWarning">
            <img
              src="@/assets/images/icn-warning.png"
              class="createWarningIcon"
            />
            <div class="createWarningMsg">
              카드결제의 경우 세금계산서 대용으로 매입세액공제를 받을 수 있는<br />
              신용카드 전표가 발행되므로 별도의 세금계산서 발행은 불가능합니다.
            </div>
          </div>
        </div>
        <div class="createInputMargin">
          <div class="createInputLabel">총 결제 금액</div>
          <div class="createFloat">
            <div class="d-flex justify-space-between createFloatMB">
              <div class="createFloatItem fontBold">공모전 등록비</div>
              <div class="createFloatItem">{100,000} 원</div>
            </div>
            <div class="d-flex justify-space-between createFloatMB">
              <div class="createFloatItem fontBold">1등 상금</div>
              <div class="createFloatItem">{100,000} 원</div>
            </div>
            <div class="d-flex justify-space-between createFloatMB">
              <div class="createFloatItem fontBold">2등 상금</div>
              <div class="createFloatItem">{100,000} 원</div>
            </div>
            <div class="d-flex justify-space-between createFloatMB">
              <div class="createFloatItem fontBold">3등 상금</div>
              <div class="createFloatItem">{100,000} 원</div>
            </div>
            <div class="d-flex createFloatMB">
              <div class="createFloatItem fontBold">추가옵션</div>
            </div>
            <div class="d-flex justify-space-between createFloatMB">
              <div class="createFloatItem ML16">상단 노출 옵션</div>
              <div class="createFloatItem">{0} 원</div>
            </div>
            <div class="d-flex justify-space-between createFloatMB">
              <div class="createFloatItem ML16">홍보 배너 게재</div>
              <div class="createFloatItem">{75,000} 원</div>
            </div>
            <div class="d-flex justify-space-between createFloatMB">
              <div class="createFloatItem ML16">상금 100% 지급</div>
              <div class="createFloatItem">{0} 원</div>
            </div>
            <div class="d-flex justify-space-between createFloatMB">
              <div class="createFloatItem ML16">가이드라인 제작</div>
              <div class="createFloatItem">{500,000} 원</div>
            </div>
            <div class="d-flex justify-space-between createFloatMB">
              <div class="createFloatItem ML16">이메일 뉴스레터 홍보</div>
              <div class="createFloatItem">{0} 원</div>
            </div>
            <div class="createFloatBorder"></div>
            <div class="d-flex justify-space-between createFloatMB">
              <div class="createFloatItem fontBold">부가가치세 (10%)</div>
              <div class="createFloatItem">{Sum+10%} 원</div>
            </div>
            <div class="createFloatBorder"></div>
            <div class="d-flex justify-space-between">
              <div class="createFloatItem fontBold createFloatTotal">
                합계
              </div>
              <div class="createFloatItem fontBold createFloatTotal">
                {Sum}
              </div>
            </div>
          </div>
        </div>
        <div class="createInputMargin MT36">
          <div class="createInputLabel">할인코드 입력</div>
          <div class="createInput rightBox">
            자발적인 참여
          </div>
          <div class="createInput rightBox">선정 포기 및 환불</div>
        </div>
        <v-checkbox v-model="checked" color="azure">
          <template v-slot:label>
            <div class="createRadioLabel">
              위 내용을 확인하였으며 결제에 동의합니다. (필수)
            </div>
          </template>
        </v-checkbox>
      </div>
    </div>
    <div class="createBorder"></div>
    <div class="createBtn">
      <a v-if="step !== 1" @click="onClickPrev" class="createPrevBtn">이전</a>
      <div v-else />
      <a v-if="step !== 6" @click="onClickNext" class="createNextBtn">다음</a>
      <nuxt-link
        v-else
        :class="checked ? '' : 'disabled'"
        to="/"
        class="createNextBtn"
        >다음</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
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
  width: 100%;
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
  line-height: 1.43;
  color: #353535;
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

a {
  text-decoration: none;
}

.MT36 {
  margin-top: 36px;
}

.selectBox {
  background: url('~assets/images/icn-chevron-bottom.png') no-repeat 95% 50%;
}

.createWarningIcon {
  width: 24px;
  height: 24px;
  margin-left: 8px;
}

.createWarning {
  display: flex;
  margin-top: 5px;
}

.createWarningMsg {
  width: 356px;
  height: 36px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #aaaaaa;
  margin-left: 4px;
}

.createFloat {
  width: 100%;
  margin-top: 8px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  padding: 24px;
  background-color: white;
}

.createFloatItem {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #222222;
}

.createFloatMB {
  margin-bottom: 8px;
}

.createFloatMB20 {
  margin-bottom: 20px;
}

.createFloatBorder {
  border-bottom: solid 1px #d8d8d8;
  margin: 24px 0;
}

.createFloatTotal {
  color: #c22424;
}

.ML16 {
  margin-left: 16px;
}

.rightBox {
  background: url('~assets/images/icn-chevron-right.png') no-repeat 95% 50%;
}
</style>
