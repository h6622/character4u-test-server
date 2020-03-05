<template>
  <div>
    <div class="d-flex align-end titleMg">
      <div class="listsTitle">진행중인 공모전 목록</div>
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
    <list-form
      v-for="i in lists"
      :key="i.index"
      :index="i.index"
      :clicked="i.clicked"
    />
    <div class="carousel d-flex justify-center">
      <page-component />
    </div>
  </div>
</template>

<script>
import PageComponent from '@/components/PageComponent'
import ListForm from '@/components/lists/ListForm'

export default {
  components: {
    PageComponent,
    ListForm
  },
  computed: {
    lists() {
      return this.$store.state.lists.lists
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

.ctText:hover {
  color: $azure;
}

.iHighlight {
  color: red;
}
</style>
