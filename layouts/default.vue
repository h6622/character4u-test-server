<template>
  <v-app>
    <nav-bar />
    <v-layout>
      <nuxt />
    </v-layout>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>
