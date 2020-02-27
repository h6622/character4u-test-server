<template>
  <div class="d-flex justify-center">
    <div class="gap"></div>
    <div class="vContain MB100">
      <div class="d-flex justify-center MT40 MB20">
        1차 통과작을 선택해주세요. ({{ passFirst }} / 3) {{ warning }}
      </div>
      <div class="d-flex justify-end MB16">
        <a @click="onClick" class="vBtn">1차 통과 선정 완료 </a>
      </div>
      <div class="d-flex justify-space-between MB16">
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy1.png" class="dImg" />
            <div
              @click="onClickChoice"
              :class="choiced ? 'choiced' : ''"
              class="circle"
            />
          </div>
          <div class="vNick">유니블루(yooniblue)</div>
        </div>
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy2.png" class="dImg" />
            <div
              @click="onClickChoice2"
              :class="choiced2 ? 'choiced' : ''"
              class="circle"
            />
          </div>
          <div class="vNick">캐포유(yoon****)</div>
        </div>
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy3.png" class="dImg" />
            <div
              @click="onClickChoice3"
              :class="choiced3 ? 'choiced' : ''"
              class="circle"
            />
          </div>
          <div class="vNick">캐포유(yoon****)</div>
        </div>
      </div>
      <div class="d-flex justify-space-between MB16">
        <div>
          <div class="vBox">
            <img src="~assets/images/dummy4.png" class="dImg" />
            <div
              @click="onClickChoice4"
              :class="choiced4 ? 'choiced' : ''"
              class="circle"
            />
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
          <page-component />
        </div>
      </div>
      <div class="vBorder"></div>
      <div class="cmtTitle MB16">
        공모전 문의사항 (<span class="cmtAzure">{N}</span>)
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
import PageComponent from '@/components/PageComponent'

export default {
  components: {
    DetailCard,
    PageComponent
  },
  data() {
    return {
      passFirst: 0,
      checked: false,
      checked2: false,
      checked3: false,
      checked4: false
    }
  },
  methods: {
    onClick() {
      this.$store.commit('detail/choice')
    },
    onClickChoice() {
      if (!this.checked && this.passFirst < 3) {
        this.choiced = 'choiced'
        this.checked = true
        this.passFirst++
      } else if (!this.checked && this.passFirst >= 3) {
        this.warning = '3개를 초과 할 수 없습니다.'
      } else if (this.checked) {
        this.choiced = ''
        this.checked = false
        this.passFirst--
      }
    },
    onClickChoice2() {
      if (!this.checked2 && this.passFirst < 3) {
        this.choiced2 = 'choiced'
        this.checked2 = true
        this.passFirst++
      } else if (!this.checked2 && this.passFirst >= 3) {
        this.warning = '3개를 초과 할 수 없습니다.'
      } else if (this.checked2) {
        this.choiced2 = ''
        this.checked2 = false
        this.passFirst--
      }
    },
    onClickChoice3() {
      if (!this.checked3 && this.passFirst < 3) {
        this.choiced3 = 'choiced'
        this.checked3 = true
        this.passFirst++
      } else if (!this.checked3 && this.passFirst >= 3) {
        this.warning = '3개를 초과 할 수 없습니다.'
      } else if (this.checked3) {
        this.choiced3 = ''
        this.checked3 = false
        this.passFirst--
      }
    },
    onClickChoice4() {
      if (!this.checked4 && this.passFirst < 3) {
        this.choiced4 = 'choiced'
        this.checked4 = true
        this.passFirst++
      } else if (!this.checked4 && this.passFirst >= 3) {
        this.warning = '3개를 초과 할 수 없습니다.'
      } else if (this.checked4) {
        this.choiced4 = ''
        this.checked4 = false
        this.passFirst--
      }
    }
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
  position: relative;
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
  width: 100%;
  border-radius: 5px;
  border: 2px solid #d8d8d8;
}

.circle {
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: gray;
  top: 0;
  right: 0;
  margin-top: 8px;
  margin-right: 8px;
}

.gap {
  width: 441px;
}

.dcMg {
  margin-top: 770px;
  margin-left: 48px;
}

.choiced {
  background-color: $azure;
}
</style>
