<template>
  <div>
    <div class="d-flex justify-center checklistContainer">
      <div class="titleSelected">
        1 Checklist
      </div>
      <div class="arrowMargin">
        <img src="~assets/images/icn-arrow.png" alt=">" />
      </div>
      <div class="titleDeselected">2 작품 업로드하기</div>
    </div>
    <div class="d-flex flex-column align-center subTitle">
      <div>작품 업로드 & 정책 체크리스트!</div>
      <div>디자인 업로드 전에 아래 체크리스트를 꼭 확인해주세요.</div>
    </div>
    <div class="d-flex justify-center checklistTitle">
      작품 업로드 Checklist!
    </div>
    <div class="d-flex flex-column align-center">
      <div class="checklistContent">
        <span class="fontBold"
          >1. 캐릭터 디자인에는 어떠한 스톡이미지, 프리벡터, 클립아트도
          사용해서는 안 됩니다.</span
        >
        상업적 사용이 제한되는 폰트, 스톡이미지의 사용 규정 및 범위를 위반할 시,
        계정이 영구적으로 삭제될 수 있습니다. 작품에 유료 폰트, 스톡이미지,
        프리벡터 등을 사용한 경우에는 반드시 의뢰자에게 저작권 문제가 없음을
        확인하고 명시해야만 합니다.
      </div>
      <div class="checklistContent checklistMT">
        <span class="fontBold"
          >2. 캐릭터포유의 판단 하에 본 디자인이 다른 디자이너의 작품을 도용한
          것으로 판단되는 경우, 캐릭터포유는 해당 디자이너의 활동을 제지 혹은
          금지할 수 있습니다.</span
        >
        또한 상금이 지급되었을 경우 캐릭터포유는 디자이너에게 전액 환불을 요구할
        수 있으며 의뢰자와의 분쟁 및 손해에 관해서는 관련법규에 따라
        디자이너에게 배상의 의무가 부여될 수 있습니다. 반드시 자신이 창작한
        디자인을 등록해 주세요.
      </div>
      <div class="checklistContent checklistMT">
        <span class="fontBold">3. </span>
        캐릭터 디자인은 반드시
        <span class="fontBold">벡터 형태로 작업</span> 해야 합니다. 이를 어길 시
        이용정지 처리될 수 있습니다.
      </div>
      <div class="checklistContent checklistMT">
        <span class="fontBold">4. </span>
        잘못된 디자인으로 인해 법적인 문제에 휘말리게 될 경우, 모든 법적 그리고
        금전적인 손실에 대한 책임은 디자이너 측에 있습니다.
      </div>
      <div class="checklistContent checklistMT">
        <span class="fontBold">5. </span>
        캐릭터포유는 실제 상업적으로 사용될 캐릭터 디자인을 의뢰하는 공모전
        플랫폼입니다. 디자이너의 출품작에 대해 의뢰자의 불만이 지속적으로 발생
        시, 캐릭터포유 내부 검수를 통해 참여가 제한될 수 있습니다.
      </div>
      <div class="checklistContent checklistMT">
        * 캐릭터포유 참여 시 반드시
        <span class="fontBold colorSky">[법률 제 11110호 - 저작권법]</span>을
        준수하여야 합니다.
      </div>
      <div class="d-flex justify-center checklistTitle">
        캐릭터포유 정책 Checklist!
      </div>
      <div class="d-flex flex-column align-center">
        <div class="checklistContent">
          <span class="fontBold">1. </span>
          공모전은 기본 1주일동안 진행되며, 마감 후 의뢰자의 요청에 따라 기간이
          연장될 수 있습니다. (1회 한정)
        </div>
        <div class="checklistContent checklistMT">
          <span class="fontBold"
            >2. 공모전 총 상금 중 80%가 참여 디자이너 분들께 지급됩니다.</span
          >
          이 중 70%는 우승하신 디자이너 분께, 10%는 우승자를 제외한 1차 통과자
          분들께 고르게 배분됩니다.<br />
          * 상금 100% 지급 공모전은 총 상금의 80%가 아닌 100% 지급.<br />
          * 브론즈패키지 공모전은 10%의 참여보상비 없이 우승자에게 모두 지급.<br />
          * 3.3% = 소득세 원천징수 후 납부 / 16.7% = 캐릭터포유 수수료
        </div>
        <div class="checklistContent checklistMT">
          <span class="fontBold">3. </span>
          우승작이 선정되지 않고 콘테스트가 종료되는 경우, 상금은 해당
          콘테스트에 참여하신 모든 디자이너 분들께 고르게 배분됩니다.
        </div>
        <div class="checklistContent checklistMT">
          <span class="fontBold">4. </span>
          골드 및 프리미엄 패키지 공모전은 총 상금 중 각각 50%, 80%가 환불될 수
          있으며, 환불이 발생하는 경우 총 상금의 30%가 해당 공모전 참여
          디자이너분들께 고르게 배분됩니다.
        </div>
        <div class="checklistContent checklistMT">
          <span class="fontBold">5. </span>
          디자이너는 공모전을 개최한 의뢰자와 이해 관계가 없어야 하며,
          <span class="fontBold"
            >의뢰자와 이해관계가 있을 경우 우승 취소, 상금회수 및 이용정지
            처리됩니다.</span
          >
        </div>
        <div>
          <v-checkbox v-model="checked" color="azure">
            <template v-slot:label>
              <div class="createRadioLabel">
                위 내용을 확인하였으며 결제에 동의합니다. (필수)
              </div>
            </template>
          </v-checkbox>
        </div>
        <div>
          <button
            @click="onClick"
            :class="checked ? '' : 'disabled'"
            class="nextBtn"
          >
            다음
          </button>
        </div>
      </div>
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
  methods: {
    onClick() {
      this.$store.dispatch('detail/next')
    }
  }
}
</script>

<style lang="scss" scoped>
.checklistContainer {
  width: 400px;
  left: 0;
  right: 0;
  margin: 40px auto 19px auto;
}

.arrowMargin {
  margin: 0 10px;
}

.titleSelected {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: $azure;
  line-height: 1.38;
}

.titleDeselected {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #d8d8d8;
  line-height: 1.38;
}

.subTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #222222;
}

.checklistTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  color: #29b7bd;
  margin-top: 48px;
  margin-bottom: 24px;
}

.checklistContent {
  width: 400px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.57;
}

.fontBold {
  font-weight: bold;
}

.checklistMT {
  margin-top: 24px;
}

.colorSky {
  color: #006cff;
}

.createRadioLabel {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #222222;
}

.nextBtn {
  width: 400px;
  padding: 15px 0;
  background-color: $azure;
  border-radius: 5px;
  margin-top: 30px;
  margin-bottom: 93px;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.disabled {
  background-color: #d8d8d8;
  pointer-events: none;
}
</style>
