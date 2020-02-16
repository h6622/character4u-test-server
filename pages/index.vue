<template>
  <div class="mainWidth">
    <main-title />
    <main-Recent />
    <main-how />
  </div>
</template>

<script>
import MainTitle from '@/components/main/MainTitle'
import MainRecent from '@/components/main/MainRecent'
import MainHow from '@/components/main/MainHow'

export default {
  components: {
    MainTitle,
    MainRecent,
    MainHow
  }
}
</script>

<style lang="scss" scoped>
.mainWidth {
  width: 100%;
}
</style>
