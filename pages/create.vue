<template>
  <div class="containerWidth">
    <create-one v-if="step === 1" :step="step" />
    <create-one v-if="step === 2" :step="step" />
  </div>
</template>

<script>
import CreateOne from '@/components/create/CreateOne'
// import CreateTwo from '@/components/create/CreateTwo'

export default {
  components: {
    CreateOne
    // CreateTwo
  },
  computed: {
    step() {
      return this.$store.state.create.step
    }
  }
}
</script>

<style lang="scss" scoped>
.containerWidth {
  width: 100%;
}
</style>
