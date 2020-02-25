<template>
  <div class="d-flex justify-center">
    <div class="gap"></div>
    <div class="vContain MB100">
      <div class="d-flex justify-center MT40 MB20">
        {02월 21일}까지 1차 통과작을 선택해주세요.
      </div>
      <div class="d-flex justify-end MB16">
        <a class="vBtn">1차 통과작 선정하기</a>
      </div>
      <div class="d-flex justify-space-between MB16">
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy1.png" class="dImg" />
          </div>
          <div class="vNick">유니블루(yooniblue)</div>
        </div>
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy2.png" class="dImg" />
          </div>
          <div class="vNick">캐포유(yoon****)</div>
        </div>
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy3.png" class="dImg" />
          </div>
          <div class="vNick">캐포유(yoon****)</div>
        </div>
      </div>
      <div class="d-flex justify-space-between MB16">
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy4.png" class="dImg" />
          </div>
          <div class="vNick">캐포유(yoon****)</div>
        </div>
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy5.png" class="dImg" />
          </div>
          <div class="vNick">캐포유(yoon****)</div>
        </div>
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy6.png" class="dImg" />
          </div>
          <div class="vNick">캐포유(yoon****)</div>
        </div>
      </div>
      <div class="d-flex justify-space-between MB16">
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy7.png" class="dImg" />
          </div>
          <div class="vNick">캐포유(yoon****)</div>
        </div>
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy8.png" class="dImg" />
          </div>
          <div class="vNick">캐포유(yoon****)</div>
        </div>
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy9.png" class="dImg" />
          </div>
          <div class="vNick">캐포유(yoon****)</div>
        </div>
      </div>
      <div class="d-flex justify-center MT50">
        <div class="vCarousel d-flex justify-space-between">
          <div>
            <img src="~assets/images/ic-pagenation-left.png" alt="이전" />
          </div>
          <div><a class="numBtn">1</a></div>
          <div><a class="numBtn">2</a></div>
          <div><a class="numBtn">3</a></div>
          <div><a class="numBtn">4</a></div>
          <div><a class="numBtn">5</a></div>
          <div>
            <img src="~assets/images/ic-pagenation-right.png" alt="다음" />
          </div>
        </div>
      </div>
      <div class="vBorder"></div>
      <div class="cmtTitle MB16">
        콘테스트 문의사항 (<span class="cmtAzure">{N}</span>)
      </div>
      <div class="d-flex">
        <textarea
          class="cmtInput"
          placeholder="디자인에 관한 문의사항만 등록해 주세요. 불만, 비방성 댓글은 의뢰자나
관리자에 의해 경고없이 삭제될 수 있으며, 사이트 이용 제한이 발생할 수 있습니다."
        ></textarea>
        <a class="cmtBtn d-flex justify-center align-center">글쓰기</a>
      </div>
    </div>
    <div class="gap">
      <detail-card class="dcMg" />
    </div>
  </div>
</template>

<script>
import DetailCard from '@/components/detail/DetailCard'

export default {
  components: {
    DetailCard
  }
}
</script>

<style lang="scss" scoped>
.vContain {
  width: 600px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.MT40 {
  margin-top: 40px;
}

.MT50 {
  margin-top: 50px;
}

.MB20 {
  margin-bottom: 20px;
}

.MB16 {
  margin-bottom: 16px;
}

.MB100 {
  margin-bottom: 100px;
}

.vBtn {
  color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  padding: 10px;
  border: 1px solid $azure;
  border-radius: 5px;
}

.vBox {
  width: 190px;
  height: 184px;
  background-color: lightgrey;
  border-radius: 5px;
}

.vNick {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.33;
  color: #222222;
  margin-top: 4px;
}

.vCarousel {
  width: 200px;
  height: 24px;
}

.numBtn {
  color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  &:hover {
    color: white;
  }
}

.vBorder {
  border-bottom: solid 1px #d8d8d8;
  margin: 38px 0;
}

.cmtTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  color: #222222;
}

.cmtAzure {
  color: $azure;
}

.cmtInput {
  width: 480px;
  height: 120px;
  resize: none;
  border: 1px solid #dedede;
  border-radius: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.43;
  padding: 16px;
}

.cmtBtn {
  width: 120px;
  height: 120px;
  border: 1px solid #dedede;
  border-radius: 5px;
  color: white;
  background-color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
}

::placeholder {
  color: #c5c5c5;
}

.dImg {
  width: 190px;
  height: 184px;
}

.gap {
  width: 441px;
}

.dcMg {
  margin-top: 770px;
  margin-left: 48px;
}
</style>
