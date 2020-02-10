<template>
  <v-container>
    <v-row>
      <v-col>
        <img
          src="@/assets/images/gnb-logo.png"
          alt="character4u"
          class="navLogo"
        />
      </v-col>
      <v-col cols="8" class="hidden-sm-and-down">
        <ul>
          <li v-for="item in menuItems" :key="item.path" class="pr-5 navMenu">
            <nuxt-link :to="item.path">
              {{ item.title }}
            </nuxt-link>
            <ul class="subItems">
              <li
                v-for="subItem in item.subItems"
                :key="subItem.path"
                class="pr-5 pt-3"
              >
                <nuxt-link :to="subItem.path">
                  {{ subItem.subTitle }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </v-col>
      <v-col class="d-flex justify-end">
        <span class="hidden-sm-and-down"><login-form /></span>
        <span class="hidden-sm-and-down ml-5"
          ><nuxt-link to="signup">회원가입</nuxt-link></span
        >
      </v-col>
      <v-col class="hidden-md-and-up">
        <span class="d-flex justify-end">모바일</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from '@/components/Loginform'

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      menuItems: [
        { title: '공모전 개최', path: '/create' },
        {
          title: '공모전 리스트',
          path: '/lists',
          subItems: [
            { subTitle: '공모전 리스트', path: '/lists' },
            { subTitle: 'My 공모전', path: '/mylists' },
            { subTitle: '관심 공모전', path: '/favolate' }
          ]
        },
        {
          title: '공모전 우승작',
          path: '/win',
          subItems: [
            { subTitle: '공모전 우승작', path: '/lists' },
            { subTitle: '디자이너 포트폴리오', path: '/portfolio' },
            { subTitle: '디자이너 랭킹', path: '/ranking' }
          ]
        },
        { title: '캐릭터포유 안내', path: '/info' },
        {
          title: '고객센터',
          path: '/qna',
          subItems: [
            { subTitle: '자주하는 질문', path: '/qna' },
            { subTitle: '문의게시판', path: '/board' },
            { subTitle: '공지사항', path: '/notice' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navLogo {
  width: 120px;
  height: 20px;
}

ul {
  display: flex;
  padding: 0;
  li {
    list-style-type: none;
  }
}

.subItems {
  position: absolute;
  display: none;
}

.navMenu:hover .subItems {
  position: absolute;
  display: flex;
}
</style>
