<template>
  <div :class="display" class="mCard">
    <div class="closeBtn">
      <v-btn @click="onClose" text color="#aaaaaa">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <div class="mTitle MT32 ML34">
      캐릭터 포유가 처음이세요?
    </div>
    <div class="mDesc MT8 ML34">
      안녕하세요 고객님!<br />
      혹시 궁금한게 있으신가요?
    </div>
    <div class="MT24 ML34 d-flex">
      <div class="mOutBtn">자주 묻는 질문</div>
      <div class="mBtn ML8">회원가입 하기</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: ''
    }
  },
  methods: {
    onClose() {
      this.display = 'display'
    }
  }
}
</script>

<style lang="scss" scoped>
.mCard {
  width: 318px;
  height: 198px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05), 0 2px 10px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #f6f6f6;
  position: relative;
}

.mTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  color: #353535;
  font-weight: bold;
  line-height: 1.3;
}

.mDesc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #666666;
  line-height: 1.3;
}

.mBtn {
  border-radius: 5px;
  background-color: $azure;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  padding: 10px 20px;
}

.mOutBtn {
  border-radius: 5px;
  border: solid 1px $azure;
  background-color: white;
  color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  padding: 10px 20px;
}

.closeBtn {
  position: absolute;
  right: 0;
}

.display {
  display: none;
}
</style>
