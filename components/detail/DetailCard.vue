<template>
  <div class="dcard">
    <div class="dtitle">
      캐릭터포유 매니저가 알려주는 콘테스트 꿀팁!
    </div>
    <div class="dmargin">
      <button v-for="i in items" :key="i.id" :class="i.mry" class="btn">
        {{ i.id }}
      </button>
    </div>
    <div class="content">
      지피지기백전백승! 브리핑내용을 알면 우승이 보입니다!
    </div>
    <div class="desc">
      아무리 멋진 캐릭터 디자인을 출품해도 의뢰자가 원하는 방향과 맞지않으면
      우승은 그야말로 그림의 떡! 우승을 향한 첫 걸음은 바로 의뢰인의 요청사항이
      적힌 브리핑을 자세히 들여다 보는 것입니다.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: '#브리핑', mry: 'mr my' },
        { id: '#썸네일', mry: 'mr my' },
        { id: '#상세이미지', mry: 'my' },
        { id: '#우승확률', mry: 'mr' },
        { id: '#저작권유의', mry: 'mr' },
        { id: '#원본파일', mry: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.dcard {
  width: 316px;
  height: 320px;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #f6f6f6;
  background-color: #ffffff;
}

.dtitle {
  width: 210px;
  height: 40px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #29b7bd;
  line-height: 1.25;
  margin-top: 24px;
  margin-left: 24px;
}

.dmargin {
  margin: 24px 22px 16px 24px;
}

.btn {
  width: 84px;
  height: 32px;
  border-radius: 5px;
  border: solid 1px #dedede;
  background-color: #ffffff;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.67;
}

.mr {
  margin-right: 8px;
}

.my {
  margin-bottom: 8px;
}

.content {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: #222222;
  line-height: 1.33;
  width: 187px;
  height: 32px;
  margin-left: 24px;
  margin-bottom: 8px;
}

.desc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: #222222;
  line-height: 1.5;
  width: 269px;
  height: 72px;
  margin-left: 24px;
}
</style>
