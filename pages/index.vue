<template>
  <div class="containerWidth">
    <main-title />
    <main-Recent />
    <main-how />
    <main-create />
    <main-win />
  </div>
</template>

<script>
import MainTitle from '@/components/main/MainTitle'
import MainRecent from '@/components/main/MainRecent'
import MainHow from '@/components/main/MainHow'
import MainCreate from '@/components/main/MainCreate'
import MainWin from '@/components/main/MainWin'

export default {
  components: {
    MainTitle,
    MainRecent,
    MainHow,
    MainCreate,
    MainWin
  }
}
</script>

<style lang="scss" scoped>
.containerWidth {
  width: 100%;
}
</style>
