<template>
  <div>
    <div class="progressBar">
      <div class="progress"></div>
    </div>
    <div class="createContent">
      <h2 class="createStep">{{ step }}/6단계</h2>
      <h1 class="createTitle">의뢰자에 대한 정보를 입력해주세요</h1>
      <div class="createDesc">
        디자이너가 좋은 디자인을 만들기 위해서는<br />
        자세한 설명이 필요합니다. 가능한 많은 디자이너의<br />
        참여를 유도하기 위해 최대한 자세히 적어주세요.
      </div>
      <div class="createInputMargin">
        <div class="createInputLabel">회사 및 단체 명</div>
        <input
          v-model="companyName"
          type="text"
          class="createInput"
          placeholder="예: (주) 캐릭터포유"
        />
      </div>
      <div class="createInputMargin">
        <div class="createInputLabel">회사 및 단체 소개</div>
        <textarea
          v-model="companyComment"
          type="text"
          class="createTextarea"
          placeholder="예: 캐릭터포유는 국내 최초 캐릭터 디자인 특화 오픈마켓입니다. 
캐릭터가 필요한 고객이 상금을 걸고 공모전을 개최하면 전문 디자이너들이 콘테스트에 참여하고, 고객은 제출된 시안 중 캐릭터 디자인 전문가의 평가를 받아 의견을 확인 후 가장 마음에 드는 디자인을 선택합니다.
저희 타겟층은 캐릭터가 필요한 기업, 자영업자, 창업자 및 
개인입니다. "
        />
      </div>
      <div class="createInputMargin">
        <div class="createInputLabel">업종 선택 (중복 선택 불가)</div>
        <div class="createJobPad">
          <div>
            <create-two-job
              v-for="item in jobItems1"
              :key="item"
              :category="item"
            />
          </div>
          <div class="createJobPadTop">
            <create-two-job
              v-for="item in jobItems2"
              :key="item"
              :category="item"
            />
          </div>
          <div class="createJobPadTop">
            <create-two-job
              v-for="item in jobItems3"
              :key="item"
              :category="item"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="createBorder"></div>
    <div class="createBtn">
      <a v-if="step !== 1" @click="onClickPrev" class="createPrevBtn">이전</a>
      <div v-else />
      <a
        v-if="step !== 6"
        @click="onClickNext"
        :class="companyName && companyComment ? '' : 'disabled'"
        class="createNextBtn"
        >다음</a
      >
      <div v-else />
    </div>
  </div>
</template>

<script>
import CreateTwoJob from '@/components/create/CreateTwoJob'

export default {
  components: {
    CreateTwoJob
  },
  data() {
    return {
      companyName: '',
      companyComment: '',
      jobItems1: ['공기업/기관', '교육/육아', '병원', '뷰티/패션'],
      jobItems2: ['식당/카페', '식품/건강', 'IT/미디어', '애완용품'],
      jobItems3: ['일반/기타']
    }
  },
  computed: {
    step() {
      return this.$store.state.create.step
    }
  },
  methods: {
    onClickPrev() {
      this.$store.dispatch('create/prevStep')
    },
    onClickNext() {
      this.$store.dispatch('create/nextStep')
    }
  }
}
</script>

<style lang="scss" scoped>
.progressBar {
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
}

.progress {
  width: 20%;
  height: 8px;
  background-color: $azure;
}

.createContent {
  width: 400px;
  left: 0;
  right: 0;
  margin: 0 auto 101px auto;
}

.createStep {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  color: #757575;
  margin-top: 40px;
  text-align: center;
}

.createTitle {
  font-family: 'Noto Sans KR', sans-serif !important;
  font-size: 22px;
  font-family: bold;
  color: #151515;
  text-align: center;
  margin-top: 38px;
  margin-bottom: 12px;
}

.createDesc {
  width: 294px;
  height: 66px;
  font-family: 'Noto Sans KR', sans-serif !important;
  font-size: 14px;
  line-height: 1.57;
  color: #666666;
  text-align: center;
  margin: 0 54px 40px 54px;
}

.createInputMargin {
  margin-bottom: 16px;
}

.createInputLabel {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #666666;
  margin-bottom: 8px;
  line-height: 1.29;
}

.createInput {
  width: 100%;
  height: 46px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #222222;
  padding: 11px 0 15px 17px;
}

.createTextarea {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #222222;
  padding: 16px 16px 0 16px;
  resize: none;
}

.createBorder {
  width: 100%;
  height: 1px;
  background-color: #d8d8d8;
}

.createBtn {
  width: 1200px;
  left: 0;
  right: 0;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}

.createPrevBtn {
  width: 196px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px $azure;
  background-color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: $azure;
  padding: 14px 84px 16px 84px;
}

.createNextBtn {
  width: 196px;
  height: 50px;
  border-radius: 5px;
  background-color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: white;
  padding: 14px 84px 16px 84px;
}

::placeholder {
  color: #c5c5c5;
}

.createJobPad {
  padding-top: 12px;
}

.createJobPadTop {
  padding-top: 28px;
}

.disabled {
  background-color: #d8d8d8;
  pointer-events: none;
}
</style>
