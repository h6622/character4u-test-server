<template>
  <div class="containerWidth">
    <main-title />
    <main-Recent />
    <main-how />
    <main-create />
    <main-win />
    <main-card class="mCard" />
  </div>
</template>

<script>
import MainTitle from '@/components/main/MainTitle'
import MainRecent from '@/components/main/MainRecent'
import MainHow from '@/components/main/MainHow'
import MainCreate from '@/components/main/MainCreate'
import MainWin from '@/components/main/MainWin'
import MainCard from '@/components/main/MainCard'

export default {
  components: {
    MainTitle,
    MainRecent,
    MainHow,
    MainCreate,
    MainWin,
    MainCard
  }
}
</script>

<style lang="scss" scoped>
.containerWidth {
  width: 100%;
}

.mCard {
  position: fixed;
  left: 1417px;
  top: 300px;
}
</style>
