<template>
  <v-app>
    <nav-bar />
    <v-layout>
      <nuxt />
    </v-layout>
    <footer-component />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterComponent from '@/components/FooterComponent'

export default {
  components: {
    NavBar,
    FooterComponent
  }
}
</script>
