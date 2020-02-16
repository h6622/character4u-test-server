<template>
  <div>
    <div class="progressBar">
      <div class="progress"></div>
    </div>
    <div class="createContent">
      <h2 class="createStep">{{ step }}/6단계</h2>
      <h1 class="createTitle">상세 공모전 내용을 입력해주세요</h1>
      <div class="createDesc">
        디자이너가 좋은 디자인을 만들기 위해서는<br />
        자세한 설명이 필요합니다. 가능한 많은 디자이너의<br />
        참여를 유도하기 위해 최대한 자세히 적어주세요.
      </div>
      <div class="createInputMargin">
        <div class="createInputLabel">공모전 제목</div>
        <input
          v-model="competitionName"
          type="text"
          class="createInput"
          placeholder="예: 캐릭터포유 시그니쳐 캐릭터 공모전"
        />
      </div>
      <div class="createInputMargin">
        <div class="createInputLabel">공모전 진행 기간</div>
        <date-picker
          v-model="startDate"
          class="createDate"
          placeholder="시작일 선택"
        />
        <date-picker
          v-model="startDate"
          type="text"
          class="createDateEnd"
          placeholder="종료일"
          disabled
        />
        <div class="createWarning">
          <img
            src="@/assets/images/icn-warning.png"
            class="createWarningIcon"
          />
          <div class="createWarningMsg">
            공모전은 진행 기간은 기본 일주일이며, 연장을 원할시 다음페이지에서
            기간 연장 옵션을 선택해주세요.
          </div>
        </div>
      </div>
      <div class="createInputMargin">
        <div class="createInputLabel">공모전 상세정보</div>
        <textarea
          v-model="companyComment"
          type="text"
          class="createTextarea"
          placeholder="좋은 디자인을 얻기 위해 가장 중요한 부분입니다. 고객님의 설명이 세부적이고 명확할수록  마음에 꼭 드는 디자인을 받아보실 확률이 높아지므로, 최대한 자세히 작성해주세요. 상세설명은 공모전 개최 후 3일간 수정이 가능합니다."
        />
      </div>
      <div class="createInputMargin">
        <div class="createInputLabel">참고 자료</div>
        <div class="createFileDesc">
          디자이너들이 참고할 수 있는 이미지 등을 업로드해 주세요. 첨부파일은
          .zip 형태로 압축해서 업로드하시길 권장합니다. 개별 파일의 용량은 최대
          20M이며 6개까지 업로드 가능합니다.
        </div>
      </div>
      <div class="createBorder" />
      <div class="createFilebox">
        <input
          class="uploadName"
          value="선택된 파일 없음"
          disabled="disabled"
        />
        <label for="createFile">파일선택</label>
        <input id="createFile" type="file" />
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
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  components: { DatePicker },
  data() {
    return {
      competitionName: '',
      startDate: ''
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
  width: 40%;
  height: 8px;
  background-color: $azure;
}

.createContent {
  width: 400px;
  left: 0;
  right: 0;
  margin: 0 auto 35px auto;
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

.createDate {
  width: 196px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
}

.createDateEnd {
  width: 196px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
}

::placeholder {
  color: #c5c5c5;
}

.createWarningIcon {
  width: 24px;
  height: 24px;
  margin-left: 8px;
}

.createWarning {
  display: flex;
  margin-top: 5px;
}

.createWarningMsg {
  width: 356px;
  height: 36px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #aaaaaa;
  margin-left: 4px;
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

.createFileDesc {
  width: 100%;
  height: 54px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #aaaaaa;
}

.createFilebox label {
  display: inline-block;
  margin-left: 134px;
  padding: 10px;
  color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  vertical-align: middle;
  background-color: white;
  cursor: pointer;
  border: 1px solid $azure;
  border-radius: 5px;
  margin-top: 15px;
}

.createFilebox input[type='file'] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.createFilebox .uploadName {
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  line-height: normal;
  vertical-align: middle;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.57;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-top: 15px;
}
</style>
