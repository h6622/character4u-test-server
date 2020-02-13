<template>
  <div class="bg">
    <h2 class="mainSubTitle">전문가 컨설팅까지 받는 신개념</h2>
    <div class="mainTitleMargin">
      <h2 class="mainTitle">캐릭터 공모전 플랫폼,</h2>
      <h2 class="mainTitle">캐릭터포유</h2>
    </div>
    <div class="btnMargin">
      <button class="outlinedBtn">공모전 개최하기</button>
      <button class="flatBtn">공모전 모아보기</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 500px;
}

.mainSubTitle {
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.5px;
  color: #ffffff;
  padding-top: 94px;
}

.mainTitleMargin {
  margin-top: 31px;
}

.mainTitle {
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 48px;
  text-shadow: 0 2px 60px rgba(0, 0, 0, 0.6);
  font-weight: bold;
  line-height: 1.25;
  letter-spacing: -0.5px;
  color: #ffffff;
}

.btnMargin {
  margin-top: 47px;
  display: flex;
  justify-content: center;
}

.outlinedBtn {
  width: 196px;
  height: 50px;
  border-radius: 5px;
  border: solid 2px $azure;
  background-color: #f7f7f7;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: $azure;
}

.flatBtn {
  margin-left: 8px;
  width: 196px;
  height: 50px;
  border-radius: 5px;
  background-color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: white;
}
</style>
