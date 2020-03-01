<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="480px">
      <template v-slot:activator="{ on }">
        <a v-on="on" class="loginMargin">로그인</a>
      </template>
      <v-card>
        <div class="closeBtn pt-3">
          <v-btn @click="close" text>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <v-card-title class="justify-center">
          <span class="loginTitle">로그인</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-container>
              <v-text-field
                v-model="userid"
                :rules="useridRules"
                label="아이디"
                required
                outlined
                clearable
                color="azure"
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
              />
              <v-row>
                <v-col>
                  <v-checkbox
                    v-model="sessions"
                    label="로그인 유지"
                    color="purple darken-2"
                    class="mt-0"
                  />
                </v-col>
                <v-col class="mt-1 d-flex justify-end">
                  아이디 / 비밀번호 찾기
                </v-col>
              </v-row>
              <v-btn
                :disabled="!valid"
                class="submitBtn"
                color="azure"
                type="submit"
                >로그인</v-btn
              >
              <div class="signup mt-5">
                이미 회원이신가요?
                <signup-form @click="close" class="signupBtn ml-0" />
              </div>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import SignupForm from '@/components/SignupForm'

export default {
  components: {
    SignupForm
  },
  data() {
    return {
      dialog: false,
      valid: false,
      userid: '',
      password: '',
      useridRules: [(v) => !!v || '아이디를 입력해주세요.'],
      passwordRules: [(v) => !!v || '비밀번호를 입력해주세요.']
    }
  },
  methods: {
    close() {
      this.dialog = false
    },
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch('users/login', {
            userid: this.userid,
            password: this.password
          })
          .then(() => {
            this.$router.push({
              path: '/'
            })
            this.dialog = false
          })
          .catch(() => {
            alert('로그인 실패')
          })
      } else {
        alert('폼이 유효하지 않습니다.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.closeBtn {
  text-align: right;
}

.loginTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-weight: bold;
}

.submitBtn {
  width: 100%;
  height: 56px !important;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
}

.signup {
  text-align: center;
}

.signupBtn {
  display: inline;
}

a {
  text-decoration: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: black !important;
}
</style>
