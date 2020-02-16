<template>
  <div class="mainWidth">
    <main-title />
    <main-Recent />
    <main-how />
    <main-win />
  </div>
</template>

<script>
import MainTitle from '@/components/main/MainTitle'
import MainRecent from '@/components/main/MainRecent'
import MainHow from '@/components/main/MainHow'
import MainWin from '@/components/main/MainWin'

export default {
  components: {
    MainTitle,
    MainRecent,
    MainHow,
    MainWin
  }
}
</script>

<style lang="scss" scoped>
.mainWidth {
  width: 100%;
}
</style>
