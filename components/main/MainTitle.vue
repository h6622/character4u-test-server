<template>
  <div class="bg">
    <div class="mContain">
      <div class="mTitle">
        전문 에이전시 컨설팅까지 받는<br />
        프리미엄 캐릭터 공모전 플랫폼
      </div>
      <div class="mDesc">
        캐릭터 콘텐츠가 최고의 자산이 되는 시대! 여러분도 자신만의 캐릭터를
        가지고 싶지 않으세요?<br />
        지금 나만의 캐릭터 공모전을 열어보세요! 전문 에이전시가 함께합니다
      </div>
      <div class="mBtnBox">
        <button class="flatBtn">공모전 개최하기</button>
        <button class="outlinedBtn ML4">공모전 모아보기</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 418px;
  /* background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
    url('~assets/images/main-bg.jpg'); */
  background: url('~assets/images/2-2.png');
}

.mContain {
  width: 750px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.mTitle {
  padding-top: 73px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color: #151515;
}

.mDesc {
  margin-top: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: -0.11px;
  color: #151515;
}

.mBtnBox {
  margin-top: 34px;
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
