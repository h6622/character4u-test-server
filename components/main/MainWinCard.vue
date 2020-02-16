<template>
  <div class="mainWinCard">
    <h1 class="mainWinCardText">
      공모전 제목 들어가게되며 두줄처리까지 가능합니다.
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.mainWinCard {
  width: 240px;
  height: 240px;
  border-radius: 5px;
  background: url('~assets/images/dummy-img1.png');
  &:hover {
    background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
      url('~assets/images/dummy-img1.png');
  }
}

.mainWinCardText {
  color: white;
  display: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 97px 32px 99px 32px;
}

.mainWinCard:hover .mainWinCardText {
  display: flex;
}
</style>
