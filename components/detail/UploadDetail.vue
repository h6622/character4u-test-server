<template>
  <div class="contain">
    <div class="d-flex justify-center MT40 MB16">
      <div class="titleDeselected">
        1 Checklist
      </div>
      <div class="arrowMargin">
        <img src="~assets/images/icn-arrow.png" alt=">" />
      </div>
      <div class="titleSelected">2 작품 업로드하기</div>
    </div>
    <div class="d-flex justify-center MB44">
      <span class="uDesc">
        미리 보여지는 썸네일 이미지와 상세 작품을 업로드하고,<br />
        작품에 대해 간략히 설명해주세요.
      </span>
    </div>
    <div class="MB16">
      <div class="uLabel">디자이너 닉네임</div>
      <input type="text" class="uInput uDesel hInput" value="유니블루" />
    </div>
    <div class="MB16">
      <div class="uLabel">작품제목</div>
      <input type="text" class="uInput hInput" />
    </div>
    <div class="MB16">
      <div class="uLabel">스톡컨텐츠 여부</div>
      <v-radio-group class="M0">
        <div class="box">
          <v-radio color="azure">
            <template v-slot:label>
              <div class="radioFont">
                네, 스톡컨텐츠를 사용하였습니다.
              </div>
            </template>
          </v-radio>
        </div>
        <div class="box MT8">
          <v-radio color="azure">
            <template v-slot:label>
              <div class="radioFont">
                아니요, 스톡컨텐츠를 사용하지 않았습니다.
              </div>
            </template>
          </v-radio>
        </div>
      </v-radio-group>
    </div>
    <div class="MB16">
      <div class="uLabel">작품설명</div>
      <textarea
        type="text"
        class="uTextarea"
        placeholder="내용은 500자 이내로 입력해 주세요."
      />
    </div>
    <div class="MB32">
      <div class="uLabel">상세작품 이미지</div>
      <div class="ulDesc">
        작품을 대표할 수 있는 정사각형의 썸네일 이미지를 올려주세요.<br />
        기준사이즈 : 600x600px
      </div>
      <div class="uBorder" />
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
    <div class="MB32">
      <div class="uLabel">미리보기 이미지</div>
      <div class="ulDesc">
        RGB 형식의 JPG업로드 l 최대 용량 10mb l 가로 최대 1024px, 세로 자유.<br />
        *파일명에 특수문자가 포함된 경우 업로드 되지 않을 수 있습니다.<br />
        (영어,숫자,한글 사용)
      </div>
      <div class="uBorder" />
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
    <div class="MB16">
      <div class="uLabel ">등록약관</div>
      <div class="box MT8 d-flex justify-space-between">
        <div class="uFont">등록약관 자세히 보기</div>
        <div>
          <img src="~assets/images/icn-chevron-right.png" alt="다음" />
        </div>
      </div>
    </div>
    <v-checkbox v-model="checked" color="azure">
      <template v-slot:label>
        <div class="ucDesc">
          타인의 작품을 도용하지 않은 본인의 창작물임을 확인하며, <br />
          공모전 참여 약관에 동의합니다.
        </div>
      </template>
    </v-checkbox>
    <div class=" MT54 MB100">
      <button :class="checked ? '' : 'disabled'" class="nextBtn">
        작품 제출하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style lang="scss" scoped>
.contain {
  width: 400px;
}

.arrowMargin {
  margin: 0 10px;
}

.titleSelected {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: $azure;
  line-height: 1.38;
}

.titleDeselected {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #d8d8d8;
  line-height: 1.38;
}

.MT40 {
  margin-top: 40px;
}

.MT54 {
  margin-top: 54px;
}

.MB16 {
  margin-bottom: 16px;
}

.MB32 {
  margin-bottom: 32px;
}

.MB44 {
  margin-bottom: 44px;
}

.MB100 {
  margin-bottom: 100px;
}

.uDesc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #222222;
  line-height: 1.43;
  text-align: center;
}

.uLabel {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #666666;
  font-weight: 500;
}

.uInput {
  height: 46px;
  margin-top: 8px;
  padding: 13px 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
}

.uDesel {
  pointer-events: none;
  background-color: #f7f7f7;
  color: #666666;
}

.M0 {
  margin: 0px;
}

.box {
  width: 400px;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  padding: 14px 22px;
}

.radioFont {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #222222;
  line-height: 1.29;
}

.MT8 {
  margin-top: 8px;
}

.uTextarea {
  height: 148px;
  margin-top: 8px;
  padding: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.43;
}

::placeholder {
  color: #c5c5c5;
}

.ulDesc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: #aaaaaa;
  line-height: 1.5;
}

.uBorder {
  border-bottom: solid 1px #d8d8d8;
  margin-top: 16px;
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

.uFont {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #222222;
}

.ucDesc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #222222;
}

.uBtn {
  background-color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: white;
  padding: 16px 160px;
}

.nextBtn {
  width: 400px;
  padding: 15px 0;
  background-color: $azure;
  border-radius: 5px;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.disabled {
  background-color: #d8d8d8;
  pointer-events: none;
}
</style>
