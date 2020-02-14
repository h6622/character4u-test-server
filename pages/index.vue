<template>
  <div class="mainWidth">
    <main-title />
    <main-Recent />
  </div>
</template>

<script>
import MainTitle from '@/components/main/MainTitle'
import MainRecent from '@/components/main/MainRecent'

export default {
  components: {
    MainTitle,
    MainRecent
  }
}
</script>

<style scoped>
.mainWidth {
  width: 100%;
}
</style>
