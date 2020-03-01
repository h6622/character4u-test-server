<template>
  <div class="bg">
    <div class="mContain">
      <div class="mTitle d-flex justify-center">
        캐릭터포유 이용방법
      </div>
      <div class="mDesc d-flex justify-center">
        캐릭터포유는 회원 유형(의뢰자, 디자이너)에 따라 이용방법이 다르므로 다음
        안내를 자세히 살펴봐 주세요
      </div>
      <div class="mDesc d-flex justify-center">
        <div
          @click="onClickReq"
          :class="selected === 'req' ? 'selected' : ''"
          class="mBtn d-flex justify-center align-center"
        >
          의뢰자
        </div>
        <div
          @click="onClickDsg"
          :class="selected === 'dsg' ? 'selected' : ''"
          class="mBtn d-flex justify-center align-center ML8"
        >
          디자이너
        </div>
      </div>
      <div class="MT62">
        <div v-if="selected === 'req'">
          <htu-req />
        </div>
        <div v-if="selected === 'dsg'">
          <htu-dsg />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HtuReq from '@/components/main/HtuReq'
import HtuDsg from '@/components/main/HtuDsg'

export default {
  components: {
    HtuReq,
    HtuDsg
  },
  data() {
    return {
      selected: 'req'
    }
  },
  methods: {
    onClickReq() {
      if (this.selected === 'dsg') {
        this.selected = 'req'
      }
    },
    onClickDsg() {
      if (this.selected === 'req') {
        this.selected = 'dsg'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 600px;
  background-color: #f7f7f7;
}

.mContain {
  width: 1170px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.mTitle {
  padding-top: 84px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #151515;
}

.mDesc {
  margin-top: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: -0.25px;
  color: #151515;
}

.mBtn {
  width: 92px;
  height: 30px;
  border-radius: 3px;
  border: solid 1px #aaaaaa;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #aaaaaa;
}

.selected {
  border: solid 1px $azure;
  background-color: $azure;
  font-weight: 500;
  color: white;
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

.mainHowLists {
  display: flex;
  justify-content: center;
  margin-top: 63px;
}

.marginTop {
  margin: -10px 16px 0 16px;
}
</style>
