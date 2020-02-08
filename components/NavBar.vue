<template>
  <v-container>
    <v-row>
      <v-col>
        <img
          src="@/assets/images/gnb-logo.png"
          alt="character4u"
          class="navLogo mr-5"
        />
      </v-col>
      <v-col cols="8" class="hidden-sm-and-down"
        ><span v-for="item in menuItems" :key="item.path" class="mr-5">{{
          item.title
        }}</span></v-col
      >
      <v-col class="hidden-sm-and-down">
        <span class="d-flex justify-end">로그인</span></v-col
      >
      <v-col class="hidden-md-and-up">
        <span class="d-flex justify-end">모바일</span></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: '공모전 개최', path: '/create' },
        { title: '공모전 리스트', path: '/lists' },
        { title: '공모전 우승작', path: '/win' },
        { title: '캐릭터포유 안내', path: '/info' },
        { title: '고객센터', path: '/service' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navLogo {
  width: 7.5rem;
}
</style>
