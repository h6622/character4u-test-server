<template>
  <div class="containerWidth">
    <create-one v-if="step === 1" :step="step" />
    <create-two v-if="step === 2" :step="step" />
    <create-three v-if="step === 3" :step="step" />
    <create-four v-if="step === 4" :step="step" />
  </div>
</template>

<script>
import CreateOne from '@/components/create/CreateOne'
import CreateTwo from '@/components/create/CreateTwo'
import CreateThree from '@/components/create/CreateThree'
import CreateFour from '@/components/create/CreateFour'

export default {
  components: {
    CreateOne,
    CreateTwo,
    CreateThree,
    CreateFour
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
