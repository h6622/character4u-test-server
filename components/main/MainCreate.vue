<template>
  <div class="bg">
    <div class="mContain">
      <div class="mTitle PT85 d-flex justify-center">
        지금 바로 캐릭터포유를 만나보세요!
      </div>
      <div class="mBtnBox MT40 d-flex justify-center">
        <div class="mBtn">공모전 개최하기</div>
        <div class="mOutBtn ML8">공모전 참여하기</div>
      </div>
      <div class="mDesc MT30 d-flex justify-center">
        공모전 상금이 궁금하신가요?
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 380px;
  background-color: $azure;
}

.mContain {
  width: 750px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.mTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: white;
}

.mBtn {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.22;
  color: $azure;
  padding: 19px 40px;
  border-radius: 5px;
  box-shadow: 4px 2px 20px 0 rgba(33, 37, 41, 0.3);
  background-color: white;
}

.mOutBtn {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.22;
  color: white;
  padding: 19px 40px;
  border-radius: 5px;
  border: 2px solid white;
  box-shadow: 4px 2px 20px 0 rgba(33, 37, 41, 0.3);
  background-color: $azure;
}

.mDesc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: white;
  line-height: 1.57;
  text-decoration: underline;
}
</style>
