<template>
  <div class="d-flex justify-space-between contain">
    <div>
      <a @click="onClickPrev">
        <img src="~assets/images/ic-pagenation-left.png" alt="이전" />
      </a>
    </div>
    <div v-for="i in pages" :key="i.page" class="d-flex justify-center pageNum">
      <a :class="i.clicked" @click="onClickNum(i.page)">{{ i.page }}</a>
    </div>
    <div>
      <a @click="onClickNext">
        <img src="~assets/images/ic-pagenation-right.png" alt="다음" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { page: 1, clicked: 'clicked' },
        { page: 2, clicked: '' },
        { page: 3, clicked: '' },
        { page: 4, clicked: '' },
        { page: 5, clicked: '' }
      ],
      clickedNum: 1
    }
  },
  methods: {
    onClickNum(i) {
      if (i === 1) {
        this.pages[0].clicked = 'clicked'
        this.pages[1].clicked = ''
        this.pages[2].clicked = ''
        this.pages[3].clicked = ''
        this.pages[4].clicked = ''
        this.clickedNum = 1
      } else if (i === 2) {
        this.pages[1].clicked = 'clicked'
        this.pages[0].clicked = ''
        this.pages[2].clicked = ''
        this.pages[3].clicked = ''
        this.pages[4].clicked = ''
        this.clickedNum = 2
      } else if (i === 3) {
        this.pages[2].clicked = 'clicked'
        this.pages[0].clicked = ''
        this.pages[1].clicked = ''
        this.pages[3].clicked = ''
        this.pages[4].clicked = ''
        this.clickedNum = 3
      } else if (i === 4) {
        this.pages[3].clicked = 'clicked'
        this.pages[0].clicked = ''
        this.pages[1].clicked = ''
        this.pages[2].clicked = ''
        this.pages[4].clicked = ''
        this.clickedNum = 4
      } else if (i === 5) {
        this.pages[4].clicked = 'clicked'
        this.pages[0].clicked = ''
        this.pages[1].clicked = ''
        this.pages[2].clicked = ''
        this.pages[3].clicked = ''
        this.clickedNum = 5
      }
    },
    onClickPrev() {
      if (this.clickedNum === 1) {
      } else {
        this.pages[this.clickedNum - 2].clicked = 'clicked'
        this.pages[this.clickedNum - 1].clicked = ''
        this.clickedNum--
      }
    },
    onClickNext() {
      if (this.clickedNum === 5) {
      } else {
        this.pages[this.clickedNum].clicked = 'clicked'
        this.pages[this.clickedNum - 1].clicked = ''
        this.clickedNum++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contain {
  width: 280px;
}

.pageNum {
  padding-top: 2px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: $azure;
  text-align: center;
}

.clicked {
  width: 24px;
  height: 24px;
  background: url('~assets/images/oval.png');
  background-position: center;
  background-size: cover;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: white;
}
</style>
