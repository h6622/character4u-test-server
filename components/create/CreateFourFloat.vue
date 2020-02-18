<template>
  <div class="createFloat">
    <h1 class="createFloatTitle">결제예정 금액</h1>
    <div class="d-flex justify-space-between createFloatMB">
      <div class="createFloatItem fontBold">공모전 등록비</div>
      <div class="createFloatItem">100,000 원</div>
    </div>
    <div class="d-flex justify-space-between createFloatMB">
      <div class="createFloatItem fontBold">총 상금</div>
      <div class="createFloatItem">{2,000,000} 원</div>
    </div>
    <div class="d-flex justify-space-between createFloatMB">
      <div class="createFloatItem fontBold">상금 수수료</div>
      <div class="createFloatItem">{총상금X20%} 원</div>
    </div>
    <div class="d-flex justify-space-between createFloatMB">
      <div class="createFloatItem fontBold">추가옵션</div>
      <div class="createFloatItem">{2,000,000} 원</div>
    </div>
    <div class="d-flex justify-space-between createFloatMB20">
      <div class="createFloatItem fontBold">부가가치세(10%)</div>
      <div class="createFloatItem">{sumX10%} 원</div>
    </div>
    <div class="createFloatBorder"></div>
    <div class="d-flex justify-space-between createFloatMB20">
      <div class="createFloatItem fontBold createFloatTotal">
        합계
      </div>
      <div class="createFloatItem fontBold createFloatTotal">
        {2,000,000}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.createFloat {
  width: 255px;
  height: 256px;
  margin-left: 24px;
  margin-top: 815px;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #f6f6f6;
  padding: 24px;
  background-color: white;
}

.createFloatTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  margin-bottom: 12px;
}

.createFloatItem {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: #666666;
}

.createFloatMB {
  margin-bottom: 8px;
}

.createFloatMB20 {
  margin-bottom: 20px;
}

.createFloatBorder {
  border-bottom: solid 1px #d8d8d8;
  margin-bottom: 15px;
}

.createFloatTotal {
  color: #c22424;
}
</style>
