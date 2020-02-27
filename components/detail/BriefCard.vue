<template>
  <div class="mainRecentCard">
    <div class="star">
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
    <div class="d-flex titleMg">
      <div class="logo"></div>
      <div class="ML16">
        <div class="font">의뢰자 text박스 200px 초과시 생략…</div>
        <div class="font fblack">
          공모전 제목 text박스 248px 이며 초과시 생략…
        </div>
      </div>
    </div>
    <div class="ML40 MT16 desc">남은기간: 0일 (~YY.MM.DD 23:59)</div>
    <div class="ML40 MT4 desc">조회수: {N}명 | 참여자: {N}명</div>
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
  width: 400px;
  height: 139px;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #f6f6f6;
  background-color: #ffffff;
  position: relative;
}

.mainRecentLogoIcon {
  display: flex;
  justify-content: space-between;
  margin: 16px 25px 8px 16px;
}

.logo {
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

.star {
  position: absolute;
  top: 12px;
  left: 366px;
}

.titleMg {
  margin-top: 24px;
  margin-left: 40px;
}

.font {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 500;
  color: #888888;
}

.fblack {
  color: #222222;
  font-weight: bold;
}

.ML16 {
  margin-left: 16px;
}

.ML40 {
  margin-left: 40px;
}

.MT16 {
  margin-top: 16px;
}

.MT4 {
  margin-top: 4px;
}

.desc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: #151515;
}
</style>
