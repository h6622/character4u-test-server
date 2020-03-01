<template>
  <div class="sContain PT48 PB165">
    <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
      <div class="signupTitle mb-5 d-flex justify-center">
        회원가입
      </div>
      <div class="signupSubTitle mb-5 d-flex justify-space-around">
        <span class="gray">① 휴대폰 본인확인</span>
        <v-icon color="#d8d8d8">mdi-arrow-right-bold</v-icon>
        <span class="sColor">② 디자이너 회원가입</span>
      </div>
      <div class="test">
        <v-text-field
          v-model="userid"
          :rules="useridRules"
          label="아이디"
          required
          outlined
          color="azure"
          hide-details="auto"
          class="MB16"
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="비밀번호"
          type="password"
          required
          outlined
          clearable
          color="azure"
          hide-details="auto"
          class="MB16"
        />
        <v-text-field
          v-model="passwordChk"
          :rules="passwordChkRules"
          label="비밀번호 확인"
          type="password"
          required
          outlined
          clearable
          color="azure"
          hide-details="auto"
          class="MB16"
        />
        <v-text-field
          v-model="name"
          outlined
          readonly
          color="azure"
          background-color="grey lighten-2"
          hide-details="auto"
          class="MB16"
        />
        <v-text-field
          v-model="phone"
          outlined
          readonly
          color="azure"
          background-color="grey lighten-2"
          hide-details="auto"
          class="MB16"
        />
        <div class="d-flex MB16">
          <v-col cols="4">
            <v-select
              :items="items"
              label="은행"
              hide-details="auto"
              color="azure"
              outlined
          /></v-col>
          <v-col>
            <v-text-field
              v-model="account"
              :rules="accountRules"
              label="계좌번호"
              placeholder="'-'없이 숫자만 입력해주세요."
              required
              outlined
              clearable
              color="azure"
              hide-details="auto"
              class="ML8"
          /></v-col>
        </div>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="이메일"
          required
          outlined
          clearable
          color="azure"
          hide-details="auto"
          class="MB16"
        />
        <v-text-field
          v-model="company"
          :rules="companyRules"
          label="닉네임(디자이너명)"
          required
          outlined
          clearable
          color="azure"
          hide-details="auto"
          class="MB16"
        />
        <div class="d-flex justify-center MB46">
          <div class="grayText">
            <span class="bold">닉네임을 신중히 입력해주세요.</span>입력된
            닉네임은 디자<br />
            이너 활동명으로 사용되며, 수정이 어렵습니다.
          </div>
        </div>
        <div class="MB16">
          <div class="agreeText">
            로그인/회원가입시<br />
            <span class="underline">이용약관</span>,
            <span class="underline">개인정보처리방침</span>에 동의하게 됩니다.
          </div>
        </div>
        <v-btn :disabled="!valid" class="submitBtn" color="azure" type="submit"
          >동의하고 가입하기</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      userid: '',
      usertype: 'requester',
      password: '',
      passwordChk: '',
      name: '정윤',
      phone: '01012345678',
      useridRules: [(v) => !!v || '아이디를 입력해주세요.'],
      passwordRules: [(v) => !!v || '비밀번호를 입력해주세요.'],
      passwordChkRules: [
        (v) => !!v || '비밀번호 확인을 입력해주세요.',
        (v) => v === this.password || '비밀번호가 일치하지 않습니다.'
      ],
      dsgRules: [(v) => !!v || '닉네임을 입력해주세요.'],
      emailRules: [
        (v) => !!v || '이메일을 입력해주세요.',
        (v) => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.'
      ],
      account: '',
      accountRules: [(v) => !!v || '계좌번호를 입력해주세요.'],
      items: ['국민', '신한', '우리', '하나', '기업', '농협']
    }
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/signup', {
          userid: this.userid,
          usertype: this.usertype,
          password: this.password,
          name: this.name,
          phone: this.phone,
          email: this.email,
          company: this.company
        })
      } else {
        alert('폼이 유효하지 않습니다.')
      }
    }
  },
  head() {
    return {
      title: '회원가입'
    }
  },
  middleware: 'anonymous'
}
</script>

<style lang="scss" scoped>
.signupTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}

.signupSubTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.gray {
  color: lightGray;
}

.submitBtn {
  width: 100%;
  height: 50px !important;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.grayText {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: lightGray;
  .bold {
    font-weight: bold;
  }
}

.agreeText {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  text-align: center;
  .underline {
    text-decoration: underline;
  }
}

.MB8 {
  margin-bottom: 8px;
}

.MB16 {
  margin-bottom: 16px;
}

.MB46 {
  margin-bottom: 46px;
}

.sContain {
  width: 350px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.sColor {
  color: $azure;
}

.v-text-field--placeholder {
  font-size: 14px;
}

.col {
  padding: 0;
}

.v-input__slot {
  min-height: 50px;
}
</style>
