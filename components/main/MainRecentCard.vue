<template>
  <div class="mainRecentCard">
    <div class="mainRecentLogoIcon">
      <div class="mainRecentLogo"></div>
      <svg
        @click="onClickIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
      >
        <path
          :fill="clicked"
          fill-rule="evenodd"
          d="M8.5 14.096L3.247 17l1.003-6.15L0 6.492l5.873-.897L8.5 0l2.627 5.596L17 6.493l-4.25 4.356L13.753 17z"
        />
      </svg>
    </div>
    <div class="mainRecentCompany">{의뢰자/단체명텍스트박스가로190px}</div>
    <div class="mainRecentTitle hovered">
      {공모전 제목은 두줄 처리로 가로 190px, 초과시 …로 생략처리}
    </div>
    <div class="mainRecentBorder"></div>
    <div class="mainRecentCardBottom">
      <div class="mainRecentReward">총 {1,000}만원 상금</div>
      <div class="mainRecentDday">D-{7}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: '#F0F0F0'
    }
  },
  methods: {
    onClickIcon() {
      if (this.clicked === '#F0F0F0') {
        this.clicked = '#8241fa'
      } else {
        this.clicked = '#F0F0F0'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mainRecentCard {
  width: 240px;
  height: 192px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  &:hover {
    border: solid 1px $azure;
    .hovered {
      color: $azure;
    }
  }
}

.mainRecentLogoIcon {
  display: flex;
  justify-content: space-between;
  margin: 16px 25px 8px 16px;
}

.mainRecentLogo {
  width: 80px;
  height: 35px;
  background-color: #f0f0f0;
}

.mainRecentIcon {
  font-size: 17px;
  color: #f0f0f0;
  transition: none !important;
}

.mainRecentCompany {
  width: 190px;
  margin: 0 25px 4px 25px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
}

.mainRecentTitle {
  width: 190px;
  margin: 0 25px 16px 25px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.mainRecentBorder {
  border: solid 0.5px #d8d8d8;
}

.mainRecentCardBottom {
  display: flex;
  justify-content: space-between;
  margin: 16px 25px 20px 25px;
}

.mainRecentReward {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: #757575;
}

.mainRecentDday {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #ff9d49;
}

.clicked {
  color: $azure;
}
</style>
