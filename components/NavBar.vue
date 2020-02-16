<template>
  <div class="container">
    <div class="navLogoItems">
      <img
        src="@/assets/images/gnb-logo.png"
        alt="character4u"
        class="navLogo"
      />
      <ul class="marginLeft">
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
    </div>
    <div>
      <div v-if="!me" class="navLogoItems">
        <span><login-form /></span>
        <span class="marginLeft"><signup-form /></span>
      </div>
      <div v-else>
        <span>{{ me.name }}님 환영합니다!</span>
        <span><v-btn @click="onLogout">로그아웃</v-btn></span>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import SignupForm from '@/components/SignupForm'

export default {
  components: {
    LoginForm,
    SignupForm
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
  },
  computed: {
    me() {
      return this.$store.state.users.me
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('users/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 25px 0;
  width: 1610px;
  height: 70px;
  display: flex;
  justify-content: space-between;
}

.navLogoItems {
  display: flex;
}

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

a {
  text-decoration: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: black;
  &:hover,
  &:focus {
    color: $azure;
  }
}

.marginLeft {
  margin-left: 40px;
}

.test {
  padding-right: 500px;
}
</style>
