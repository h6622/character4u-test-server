<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="480px">
      <template v-slot:activator="{ on }">
        <a v-on="on" class="loginMargin">회원가입</a>
      </template>
      <v-card>
        <div class="closeBtn pt-3">
          <v-btn @click="close" text>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <v-card-title class="justify-center">
          <span class="loginTitle">캐릭터포유 회원가입</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <div class="signup mt-5">
              공모를 개최하고 싶으신가요?
            </div>
            <v-btn
              @click="close"
              class="submitBtn"
              color="purple darken-2"
              to="signup_req"
              >의뢰자 회원가입</v-btn
            >
            <div class="signup my-3">
              OR
            </div>
            <div class="signup">
              공모를 참여하고 싶으신가요?
            </div>
            <v-btn
              @click="close"
              class="submitBtn"
              color="purple darken-2"
              to="signup_dsg"
              >디자이너 회원가입</v-btn
            >
            <div class="signup mt-5">
              이미 회원이신가요?
              <login-form @click="close" class="loginBtn ml-0" />
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    close() {
      this.dialog = false
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

.loginBtn {
  display: inline;
}
</style>
