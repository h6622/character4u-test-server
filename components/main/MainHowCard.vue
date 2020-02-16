<template>
  <div class="mainHowCard">
    <div class="mainHowImg" />
    <h2 class="mainHowStep">{{ step }}</h2>
    <h1 class="mainHowTitle">{{ title }}</h1>
    <div class="mainHowContent">
      캐릭터포유는 표시된 상금의 20%를(우승자 세금 포함) 수수료로 공제 후 80%를
      디자이너에게 지급합니다. 해당 옵션은 수수료를 고객님이 대신 부담하여
      상금의 100%가 디자이너에게 지급됩니다.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.mainHowCard {
  width: 240px;
  height: 398px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
}

.mainHowImg {
  width: 176px;
  height: 91px;
  margin: 29px 32px 22px 32px;
  background-color: #757575;
}

.mainHowStep {
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 10px;
  font-weight: bold;
  color: $azure;
}

.mainHowContent {
  width: 176px;
  height: 140px;
  margin: 22px 32px 52px 32px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #666666;
}

.mainHowTitle {
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
}
</style>
