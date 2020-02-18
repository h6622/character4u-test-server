<template>
  <div>
    <div v-if="grade === 'premium'" class="createFourCard">
      <v-radio color="azure" class="createRadioMargin" />

      <div class="createFlex">
        <img
          src="@/assets/images/img-premium.png"
          alt="premium"
          class="createGradeImg"
        />
        <span class="createTitle createPremium">프리미엄</span>
      </div>
      <div class="createReward">최소 상금 500만원~</div>
      <div v-for="item in premiumOptions" :key="item" class="createFlex">
        <span class="createOption">{{ item }}</span>
        <img
          src="@/assets/images/icn-info.png"
          alt="info"
          class="createInfoIcon"
        />
      </div>
    </div>

    <div v-if="grade === 'gold'" class="createFourCard">
      <v-radio color="azure" class="createRadioMargin" />

      <div class="createFlex">
        <img
          src="@/assets/images/img-gold.png"
          alt="gold"
          class="createGradeImg"
        />
        <span class="createTitle createGold">골드</span>
      </div>
      <div class="createReward">최소 상금 300만원~</div>
      <div v-for="item in goldOptions" :key="item" class="createFlex">
        <span class="createOption">{{ item }}</span>
        <img
          src="@/assets/images/icn-info.png"
          alt="info"
          class="createInfoIcon"
        />
      </div>
    </div>

    <div v-if="grade === 'silver'" class="createFourCard">
      <v-radio color="azure" class="createRadioMargin" />

      <div class="createFlex">
        <img
          src="@/assets/images/img-silver.png"
          alt="silver"
          class="createGradeImg"
        />
        <span class="createTitle createSilver">실버</span>
      </div>
      <div class="createReward">최소 상금 100만원~</div>
      <div v-for="item in silverOptions" :key="item" class="createFlex">
        <span class="createOption">{{ item }}</span>
        <img
          src="@/assets/images/icn-info.png"
          alt="info"
          class="createInfoIcon"
        />
      </div>
    </div>

    <div v-if="grade === 'bronze'" class="createFourCard">
      <v-radio color="azure" class="createRadioMargin" />

      <div class="createFlex">
        <img
          src="@/assets/images/img-bronze.png"
          alt="bronze"
          class="createGradeImg"
        />
        <span class="createTitle createBronze">브론즈</span>
      </div>
      <div class="createReward">최소 상금 50만원~</div>
      <div v-for="item in bronzeOptions" :key="item" class="createFlex">
        <span class="createOption">{{ item }}</span>
        <img
          src="@/assets/images/icn-info.png"
          alt="info"
          class="createInfoIcon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grade: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      premiumOptions: [
        '에이전시 컨설팅 제공',
        '탑 디자이너',
        '1차 통과작 선정 가능',
        '환불 80% 가능',
        '최상단 노출 옵션 무료',
        '이메일 뉴스레터 홍보'
      ],
      goldOptions: [
        '에이전시 심사 및 평가 제공',
        '상위 디자이너',
        '1차 통과작 선정 가능',
        '환불 50% 가능',
        '리스트 상단 노출'
      ],
      silverOptions: [
        '경력 디자이너',
        '1차 통과작 선정 가능',
        '상금 환불 불가'
      ],
      bronzeOptions: ['신진 디자이너', '1차 통과작 선정 가능', '상금 환불 불가']
    }
  }
}
</script>

<style lang="scss" scoped>
.createFourCard {
  width: 196px;
  height: 268px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
}

.createRadioMargin {
  margin: 8px 90px -16px 90px;
  padding: 0;
}

.createFlex {
  display: flex;
}

.createGradeImg {
  width: 26px;
  height: 26px;
  margin-left: 24px;
}

.createTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.13;
  margin-top: 4px;
  margin-left: 2px;
}

.createPremium {
  color: #ff001c;
}

.createGold {
  color: #f6af2d;
}

.createSilver {
  color: #aaaaaa;
}

.createBronze {
  color: #bb6730;
}

.createReward {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #222222;
  margin: 4px 0px 16px 24px;
}

.createOption {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #4a4a4a;
  margin-left: 24px;
  margin-bottom: 8px;
}

.createInfoIcon {
  width: 10px;
  height: 10px;
  margin-top: 4px;
  margin-left: 2px;
}
</style>
