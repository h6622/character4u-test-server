<template>
  <div class="bg">
    <h1 class="mainHow">캐릭터 포유 이용방법</h1>
    <div class="mainHowToggle">
      <a :class="clickreq" @click="onClickReq">의뢰자</a>
      <a :class="clickdsg" @click="onClickDsg" class="marginLeft">디자이너</a>
    </div>
    <div class="mainHowLists">
      <main-how-card :step="step1" :title="title1" />
      <main-how-card :step="step2" :title="title2" class="marginTop" />
      <main-how-card :step="step3" :title="title3" />
    </div>
  </div>
</template>

<script>
import MainHowCard from '@/components/main/MainHowCard'

export default {
  components: {
    MainHowCard
  },
  data() {
    return {
      clickreq: 'clicked',
      clickdsg: 'disabled',
      step1: 'STEP1',
      step2: 'STEP2',
      step3: 'STEP3',
      title1: '공모전 개최',
      title2: '공모전 참여작 모집',
      title3: '1위 선정 및 상금 지급'
    }
  },
  methods: {
    onClickReq() {
      if (this.clickdsg) {
        this.clickreq = 'clicked'
        this.clickdsg = 'disabled'
      }
    },
    onClickDsg() {
      if (this.clickreq) {
        this.clickdsg = 'clicked'
        this.clickreq = 'disabled'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 700px;
  background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
    url('~assets/images/main-bg.jpg');
}

.mainHow {
  padding-top: 70px;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 26px;
  font-weight: 800;
  line-height: 1.15;
  color: #ffffff;
}

.mainHowToggle {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.clicked {
  padding: 0 10px 12px 10px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.11;
  color: white;
  border-bottom: 3px solid white;
}

.disabled {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  line-height: 1.11;
  color: #c5c5c5;
}

.marginLeft {
  margin-left: 40px;
}

.mainHowLists {
  display: flex;
  justify-content: center;
  margin-top: 63px;
}

.marginTop {
  margin: -10px 16px 0 16px;
}
</style>
