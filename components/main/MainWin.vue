<template>
  <div class="mainWinMargin">
    <div>
      <h1 class="mainWinTitle">공모전 우승작</h1>
    </div>
    <div class="mainWinLists">
      <main-win-card />
      <main-win-card class="marginLeft" />
      <main-win-card class="marginLeft" />
    </div>
    <div class="mainWinLists  marginTop">
      <main-win-card />
      <main-win-card class="marginLeft" />
      <main-win-card class="marginLeft" />
    </div>
    <div class="mainWinLists  marginTop">
      <main-win-card />
      <main-win-card class="marginLeft" />
      <main-win-card class="marginLeft" />
    </div>
    <div class="btnMargin">
      <button class="mainWinBtn">모든 공모전 보기</button>
    </div>
  </div>
</template>

<script>
import MainWinCard from '@/components/main/MainWinCard'

export default {
  components: {
    MainWinCard
  }
}
</script>

<style lang="scss" scoped>
.mainWinMargin {
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 752px;
}

.mainWinTitle {
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 26px;
  font-weight: 800;
  color: #151515;
  margin-top: 100px;
  margin-bottom: 40px;
}

.mainWinLists {
  display: flex;
  justify-content: center;
}

.marginLeft {
  margin-left: 16px;
}

.marginTop {
  margin-top: 16px;
}
</style>
