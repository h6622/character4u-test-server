<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="480px">
      <template v-slot:activator="{ on }">
        <a v-on="on" class="loginMargin">로그인</a>
      </template>
      <v-card>
        <div class="closeBtn pt-3">
          <v-btn @click="dialog = false" text>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <v-card-title class="justify-center">
          <span class="loginTitle">로그인</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="아이디"
                type="email"
                required
                outlined
                clearable
                color="purple darken-2"
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="비밀번호"
                type="password"
                required
                outlined
                clearable
                color="purple darken-2"
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
              <v-btn class="submitBtn" color="purple darken-2" type="submit"
                >로그인</v-btn
              >
              <div class="signup mt-5">
                아직 회원이 아니신가요?
                <nuxt-link to="signup">회원가입</nuxt-link>
              </div>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
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

.loginMargin {
  margin-top: 1px;
}
</style>
