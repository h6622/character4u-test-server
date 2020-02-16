<template>
  <div class="mainRecentMargin">
    <div>
      <h1 class="mainRecentTitle">최신 공모전 모아보기</h1>
    </div>
    <div class="mainRecentSort">
      <a :class="recentSort" @click="onClickRecent">최신 등록순</a>
      <a>|</a>
      <a :class="highSort" @click="onClickHigh">높은 상금순</a>
    </div>
    <div class="mainRecentLists">
      <main-recent-card />
      <main-recent-card class="marginLeft" />
      <main-recent-card class="marginLeft" />
    </div>
    <div class="mainRecentLists  marginTop">
      <main-recent-card />
      <main-recent-card class="marginLeft" />
      <main-recent-card class="marginLeft" />
    </div>
    <div class="mainRecentLists  marginTop">
      <main-recent-card />
      <main-recent-card class="marginLeft" />
      <main-recent-card class="marginLeft" />
    </div>
    <div class="btnMargin">
      <button class="mainRecentBtn">모든 공모전 보기</button>
    </div>
  </div>
</template>

<script>
import MainRecentCard from '@/components/main/MainRecentCard'

export default {
  components: {
    MainRecentCard
  },
  data() {
    return {
      recentSort: 'clicked',
      highSort: ''
    }
  },
  methods: {
    onClickRecent() {
      if (this.highSort) {
        this.recentSort = this.highSort
        this.highSort = ''
      }
    },
    onClickHigh() {
      if (this.recentSort) {
        this.highSort = this.recentSort
        this.recentSort = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mainRecentMargin {
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 752px;
}

.mainRecentTitle {
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 26px;
  font-weight: 800;
  line-height: 1.15;
  color: #353535;
  margin-top: 100px;
}

.mainRecentSort {
  text-align: right;
  margin-top: 40px;
  margin-bottom: 24px;
}

a {
  text-decoration: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
  color: #c5c5c5;
}

.clicked {
  color: $azure;
}

.mainRecentLists {
  display: flex;
  justify-content: center;
}

.marginLeft {
  margin-left: 16px;
}

.marginTop {
  margin-top: 16px;
}

.btnMargin {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
}

.mainRecentBtn {
  width: 240px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px $azure;
  background-color: #ffffff;
  font-family: 'Noto Sans KR', sans-serif;
  color: $azure;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
}
</style>
