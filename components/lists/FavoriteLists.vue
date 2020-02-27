<template>
  <div>
    <div class="d-flex align-end titleMg">
      <div class="listsTitle">관심 공모전 목록</div>
      <div class="subTitle">
        총 {000}건
      </div>
    </div>
    <div class="boardTitle d-flex align-center">
      <div class="logo d-flex justify-center"></div>
      <div class="company d-flex justify-center boardFont FW500">의뢰자</div>
      <div class="comTitle d-flex justify-center boardFont FW500">
        공모전 제목
      </div>
      <div class="views d-flex justify-center boardFont FW500">조회수</div>
      <div class="part d-flex justify-center boardFont FW500">참여자</div>
      <div class="reward d-flex justify-center boardFont FW500">상금</div>
      <div class="term d-flex justify-center boardFont FW500">기간</div>
      <div class="save d-flex justify-center boardFont FW500">저장</div>
    </div>
    <div v-for="i in items" :key="i" class="boardContent d-flex">
      <div class="logo d-flex justify-center align-center">
        <div class="comLogo" />
      </div>
      <div class="company d-flex justify-center boardFont align-center">
        에이프릴스톤
      </div>
      <div class="comTitle d-flex justify-center align-center boardFont CBlack">
        [공기업/기관] ‘토스터기 형태의 무선충전+살균기’ 제품 디자인 공모전…
      </div>
      <div class="views d-flex justify-center align-center boardFont">
        {1,000}
      </div>
      <div class="part d-flex justify-center align-center boardFont">
        {1,000}
      </div>
      <div class="reward d-flex justify-center align-center boardFont">
        {1천만원}
      </div>
      <div
        class="term d-flex flex-column justify-center align-center boardFont"
      >
        <div class="CGreen">진행중</div>
        <div class="smFont">1차선정중</div>
      </div>
      <div class="save d-flex justify-center align-center">
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
    </div>
    <div class="carousel d-flex justify-center">
      <page-component />
    </div>
  </div>
</template>

<script>
import PageComponent from '@/components/PageComponent'

export default {
  components: {
    PageComponent
  },
  data() {
    return {
      clicked: '#F0F0F0',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
.listsTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #151515;
  margin-right: 8px;
}

.subTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #888888;
  margin-right: 8px;
}

.azure {
  color: $azure;
}

.titleMg {
  margin-bottom: 37px;
}

.boardTitle {
  width: 100%;
  height: 60px;
  background-color: #f8f8f8;
  border-top: solid 2px #979797;
}

.boardContent {
  width: 100%;
  height: 83px;
}

.logo {
  width: 140px;
}

.company {
  width: 120px;
}

.comTitle {
  width: 480px;
}

.views {
  width: 80px;
}

.part {
  width: 80px;
}

.reward {
  width: 100px;
}

.term {
  width: 100px;
}

.save {
  width: 100px;
}

.boardFont {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #888888;
}

.FW500 {
  font-weight: 500;
}

.CBlack {
  color: black;
}

.CGreen {
  color: #29b7bd;
}

.smFont {
  font-size: 12px;
}

.comLogo {
  width: 80px;
  height: 35px;
  background-color: #f0f0f0;
}

.carousel {
  margin: 40px 0;
}

.carNum {
  width: 24px;
  height: 24px;
  margin: 0 4px;
}

.clickNum {
  color: $azure;
  font-weight: bold;
}
</style>
