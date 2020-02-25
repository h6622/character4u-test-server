<template>
  <div class="detailContainer">
    <div>
      <h1 class="title d-flex justify-center">공모전 제목/text박스가로300</h1>
    </div>
    <div class="d-flex justify-center">
      <a :class="subTitle1" @click="onClick1" class="subTitleWidth"
        >브리핑 보기</a
      >
      <a :class="subTitle2" @click="onClick2" class="subTitleWidth"
        >참여작 보기({60})</a
      >
      <a :class="subTitle3" @click="onClick3" class="subTitleWidth"
        >공모전 참여</a
      >
    </div>
    <div v-if="selected === 'brief'">
      <brief-detail />
    </div>
    <div v-if="selected === 'view'">
      <view-detail />
    </div>
    <div v-if="selected === 'join'">
      <join-detail />
    </div>
  </div>
</template>

<script>
import JoinDetail from '@/components/detail/JoinDetail'
import BriefDetail from '@/components/detail/BriefDetail'
import ViewDetail from '@/components/detail/ViewDetail'

export default {
  components: {
    JoinDetail,
    BriefDetail,
    ViewDetail
  },
  data() {
    return {
      subTitle1: 'selected',
      subTitle2: 'deselected',
      subTitle3: 'deselected',
      selected: 'brief'
    }
  },
  methods: {
    onClick1() {
      this.subTitle1 = 'selected'
      this.subTitle2 = 'deselected'
      this.subTitle3 = 'deselected'
      this.selected = 'brief'
    },
    onClick2() {
      this.subTitle1 = 'deselected'
      this.subTitle2 = 'selected'
      this.subTitle3 = 'deselected'
      this.selected = 'view'
    },
    onClick3() {
      this.subTitle1 = 'deselected'
      this.subTitle2 = 'deselected'
      this.subTitle3 = 'selected'
      this.selected = 'join'
    }
  }
}
</script>

<style lang="scss" scoped>
.detailContainer {
  width: 1482px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.title {
  margin-top: 50px;
  margin-bottom: 41px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #151515;
}

.subTitleWidth {
  width: 200px;
  text-align: center;
  padding: 20px 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
}

.selected {
  border-bottom: 2px solid $azure;
  font-weight: 500;
  color: #444444 !important;
}

.deselected {
  color: #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
}

.gap {
  width: 441px;
}

.main {
  width: 600px;
}

.cardMargin {
  margin-top: 90%;
  margin-left: 125px;
}
</style>
