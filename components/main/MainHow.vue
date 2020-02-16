<template>
  <div class="bg">
    <h1 class="mainHow">캐릭터 포유 이용방법</h1>
    <div class="mainHowToggle">
      <a :class="clickreq" @click="onClickReq">의뢰자</a>
      <a :class="clickdsg" @click="onClickDsg" class="marginLeft">디자이너</a>
    </div>
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickreq: 'clicked',
      clickdsg: 'disabled'
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
  height: 500px;
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
</style>
