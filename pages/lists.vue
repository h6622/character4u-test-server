<template>
  <div class="listsContainer">
    <div>
      <h1 class="title d-flex justify-center">공모전 리스트</h1>
    </div>
    <div class="d-flex justify-center subTitle">
      <a :class="subTitle1" @click="onClick1" class="subTitleWidth"
        >진행중인 공모전</a
      >
      <a :class="subTitle2" @click="onClick2" class="subTitleWidth"
        >관심 공모전</a
      >
      <a :class="subTitle3" @click="onClick3" class="subTitleWidth"
        >MY 공모전</a
      >
    </div>
    <div class="sort">
      <select type="text" class="jobSortWidth createInput selectBox">
        <option>업종 전체 ({N})</option>
        <option>업종 전체 ({N})</option>
        <option>업종 전체 ({N})</option>
      </select>
      <select type="text" class="jobSortWidth createInput selectBox">
        <option>기본 정렬</option>
        <option>마감임박 순 정렬</option>
        <option>참여자 순 정렬</option>
        <option>참여자 순 정렬</option>
        <option>조회 순 정렬</option>
      </select>
    </div>
    <ing-lists v-if="selected === 'ing'" />
    <favorite-lists v-if="selected === 'favorite'" />
    <my-lists v-if="selected === 'my'" />
  </div>
</template>

<script>
import IngLists from '@/components/lists/IngLists'
import FavoriteLists from '@/components/lists/FavoriteLists'
import MyLists from '@/components/lists/MyLists'

export default {
  components: {
    IngLists,
    FavoriteLists,
    MyLists
  },
  data() {
    return {
      subTitle1: 'selected',
      subTitle2: 'deselected',
      subTitle3: 'deselected',
      selected: 'ing'
    }
  },
  methods: {
    onClick1() {
      this.subTitle1 = 'selected'
      this.subTitle2 = 'deselected'
      this.subTitle3 = 'deselected'
      this.selected = 'ing'
    },
    onClick2() {
      this.subTitle1 = 'deselected'
      this.subTitle2 = 'selected'
      this.subTitle3 = 'deselected'
      this.selected = 'favorite'
    },
    onClick3() {
      this.subTitle1 = 'deselected'
      this.subTitle2 = 'deselected'
      this.subTitle3 = 'selected'
      this.selected = 'my'
    }
  }
}
</script>

<style lang="scss" scoped>
.listsContainer {
  width: 1200px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.title {
  margin-top: 50px;
  margin-bottom: 41px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #222222;
}

.subTitle {
  margin-bottom: 82px;
}

.subTitleWidth {
  width: 200px;
  text-align: center;
  padding: 20px 46px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
}

.selected {
  border-bottom: 2px solid $azure;
  font-weight: 500;
  color: #444444 !important;
}

.deselected {
  color: #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
}

.jobSortWidth {
  width: 167px;
}

.createInput {
  height: 36px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: #222222;
  padding-left: 16px;
}

.selectBox {
  background: url('~assets/images/icn-down.png') no-repeat 95% 50%;
}

.sort {
  margin-bottom: 36px;
}
</style>
