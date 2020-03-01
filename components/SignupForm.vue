<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="360px">
      <template v-slot:activator="{ on }">
        <a v-on="on" class="loginMargin">회원가입</a>
      </template>
      <v-card>
        <div class="sBox">
          <div class="closeBtn pt-3">
            <v-btn @click="close" text color="#aaaaaa">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>

          <v-card-title class="justify-center MT8">
            <span class="loginTitle">캐릭터포유 회원가입</span>
          </v-card-title>
          <v-card-text>
            <div>
              <div class="signup mt-5">
                공모를 개최하고 싶으신가요?
              </div>
              <div class="d-flex justify-center mt-1">
                <nuxt-link
                  @click.native="close"
                  class="submitBtn d-flex justify-center align-center"
                  color="azure"
                  to="/signup_req"
                  >의뢰자 회원가입</nuxt-link
                >
              </div>
              <div class="signup my-3">
                OR
              </div>
              <div class="signup">
                공모를 참여하고 싶으신가요?
              </div>
              <div class="d-flex justify-center mt-1">
                <nuxt-link
                  @click.native="close"
                  class="submitBtn d-flex justify-center align-center"
                  color="azure"
                  to="/signup_dsg"
                  >디자이너 회원가입</nuxt-link
                >
              </div>
              <div class="signup mt-5">
                이미 회원이신가요?
                <login-form @click="dialog = false" class="loginBtn ml-0" />
              </div>
            </div>
          </v-card-text>
        </div>
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
  position: absolute;
  right: 0;
}

.closeColor {
  color: red;
}

.loginTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.submitBtn {
  width: 300px;
  height: 46px;
  color: white !important;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 500;
  background-color: $azure;
  border-radius: 5px;
}

.signup {
  text-align: center;
}

.loginBtn {
  display: inline;
}

.mBox {
  position: relative;
}
</style>
