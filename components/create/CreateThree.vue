<template>
  <div>
    <div class="progressBar">
      <div class="progress"></div>
    </div>
    <div class="createContent">
      <h2 class="createStep">{{ step }}/6단계</h2>
      <h1 class="createTitle">먼저 기본정보를 입력해주세요</h1>
      <div class="createInputMargin">
        <div class="createInputLabel">의뢰자 성명</div>
        <input v-model="name" type="text" class="createInput" />
      </div>
      <div class="createInputMargin">
        <div class="createInputLabel">이메일 주소</div>
        <input v-model="email" type="text" class="createInput" />
      </div>
      <div class="createInputMargin">
        <div class="createInputLabel">연락처</div>
        <input v-model="phone" type="text" class="createInput" />
      </div>
    </div>
    <div class="createBorder"></div>
    <div class="createBtn">
      <a v-if="step !== 1" @click="onClickPrev" class="createPrevBtn">이전</a>
      <div v-else />
      <a
        v-if="step !== 6"
        @click="onClickNext"
        :class="name && email && phone ? '' : 'disabled'"
        class="createNextBtn"
        >다음</a
      >
      <div v-else />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: ''
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
  width: 0%;
  height: 8px;
  background-color: $azure;
}

.createContent {
  width: 300px;
  left: 0;
  right: 0;
  margin: 0 auto 427px auto;
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
  font-weight: bold;
  color: #151515;
  text-align: center;
  margin-top: 38px;
  margin-bottom: 40px;
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

.disabled {
  background-color: #d8d8d8;
  pointer-events: none;
}
</style>
