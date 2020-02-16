<template>
  <div>
    <div class="container">
      <div class="navLogoItems">
        <img
          src="@/assets/images/gnb-logo.png"
          alt="character4u"
          class="navLogo"
        />
        <ul class="marginLeft">
          <li
            v-for="item in menuItems"
            :key="item.path"
            @mouseover="onMouseOver"
            @mouseleave="onMouseLeave"
            class="pr-5 navMenu"
          >
            <nuxt-link :to="item.path">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="navLoginMargin">
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
    <div v-if="hovered" class="navSub">
      <div class="navSubItems">
        <div class="navSubGap"></div>
        <ul class="marginLeft">
          <li
            v-for="item in menuItems"
            :key="item.path"
            class="pr-5 navSubMenu"
          >
            <nuxt-link :to="item.path">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
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
      ],
      hovered: false
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
    },
    onMouseOver() {
      this.hovered = true
    },
    onMouseLeave() {
      this.hovered = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0;
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
  margin-top: 25px;
}

ul {
  display: flex;
  padding: 0;
  li {
    list-style-type: none;
  }
}

.navMenu {
  padding: 25px 0;
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

.navSubGap {
  width: 120px;
  height: 20px;
}

.navSub {
  position: absolute;
  background-color: #f7f7f7;
  opacity: 0.5;
  width: 100%;
  height: 46px;
}

.navSubItems {
  left: 0;
  right: 0;
  margin: 0 auto;
  padding-top: 10px;
  width: 1610px;
  height: 70px;
  display: flex;
}

.navLoginMargin {
  margin-top: 25px;
}
</style>
