<template>
  <a @click="onClick" :class="clicked" class="createJob">{{ category }}</a>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      clicked: ''
    }
  },
  methods: {
    onClick() {
      if (!this.clicked) {
        this.clicked = 'clicked'
      } else {
        this.clicked = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.createJob {
  padding: 10px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  color: #d8d8d8;
  font-family: 'Noto Sans KR', sans-serif !important;
  font-size: 14px;
  line-height: 1.57;
  margin-right: 8px;
  margin-bottom: 8px;
}

.clicked {
  color: $azure;
  border-color: $azure;
}
</style>
