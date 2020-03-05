<template>
  <div class="d-flex justify-center">
    <div class="gap"></div>
    <div class="vContain MB100">
      <div class="d-flex justify-center MT40 MB20">
        1차 통과작을 선택해주세요. ({{ passFirst }} / 3) {{ warning }}
      </div>
      <div class="d-flex justify-end MB16">
        <a class="vBtn">1차 통과 선정 완료 </a>
      </div>
      <div
        v-for="i in items"
        :key="i.index"
        class="d-flex justify-space-between MB16"
      >
        <div v-for="j in i.images" :key="j.index" class="imgBox">
          <div @click="onClick(i.index, j.index, j.selected)">
            <img
              v-if="!j.selected"
              src="~assets/images/deselected.png"
              class="selected"
            />
            <img v-else src="~assets/images/selected.png" class="selected" />
          </div>

          <img :src="j.url" class="dImg" />
          <div class="vNick">{{ j.nick }}</div>
        </div>
      </div>

      <div class="d-flex justify-center MT50">
        <div class="vCarousel d-flex justify-space-between">
          <page-component />
        </div>
      </div>
      <div class="vBorder"></div>
      <div class="cmtTitle MB16">
        공모전 문의사항 (<span class="cmtAzure">{N}</span>)
      </div>
      <div class="d-flex">
        <textarea
          class="cmtInput"
          placeholder="디자인에 관한 문의사항만 등록해 주세요. 불만, 비방성 댓글은 의뢰자나
관리자에 의해 경고없이 삭제될 수 있으며, 사이트 이용 제한이 발생할 수 있습니다."
        ></textarea>
        <a class="cmtBtn d-flex justify-center align-center">글쓰기</a>
      </div>
    </div>
    <div class="gap">
      <detail-card class="dcMg" />
    </div>
  </div>
</template>

<script>
import DetailCard from '@/components/detail/DetailCard'
import PageComponent from '@/components/PageComponent'
import dummy1 from '@/assets/images/dummy1.png'
import dummy2 from '@/assets/images/dummy2.png'
import dummy3 from '@/assets/images/dummy3.png'
import dummy4 from '@/assets/images/dummy4.png'
import dummy5 from '@/assets/images/dummy5.png'
import dummy6 from '@/assets/images/dummy6.png'
import dummy7 from '@/assets/images/dummy7.png'
import dummy8 from '@/assets/images/dummy8.png'
import dummy9 from '@/assets/images/dummy9.png'

export default {
  components: {
    DetailCard,
    PageComponent
  },
  data() {
    return {
      passFirst: 0,
      checked: false,
      items: [
        {
          index: 0,
          images: [
            {
              index: 0,
              url: dummy1,
              nick: '유니블루 (yoon****)',
              selected: false
            },
            {
              index: 1,
              url: dummy2,
              nick: '캐포유(yoon****)',
              selected: false
            },
            { index: 2, url: dummy3, nick: '캐포유(yoon****)', selected: false }
          ]
        },
        {
          index: 1,
          images: [
            {
              index: 0,
              url: dummy4,
              nick: '캐포유(yoon****)',
              selected: false
            },
            {
              index: 1,
              url: dummy5,
              nick: '캐포유(yoon****)',
              selected: false
            },
            { index: 2, url: dummy6, nick: '캐포유(yoon****)', selected: false }
          ]
        },
        {
          index: 2,
          images: [
            {
              index: 0,
              url: dummy7,
              nick: '캐포유(yoon****)',
              selected: false
            },
            {
              index: 1,
              url: dummy8,
              nick: '캐포유(yoon****)',
              selected: false
            },
            { index: 2, url: dummy9, nick: '캐포유(yoon****)', selected: false }
          ]
        }
      ]
    }
  },
  methods: {
    onClick(i, j, sel) {
      if (sel) {
        this.items[i].images[j].selected = false
      } else {
        this.items[i].images[j].selected = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.vContain {
  width: 600px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.imgBox {
  position: relative;
}

.dImg {
  width: 190px;
  height: 184px;
}

.selected {
  position: absolute;
  right: 0;
  margin: 8px;
}

.MT40 {
  margin-top: 40px;
}

.MT50 {
  margin-top: 50px;
}

.MB20 {
  margin-bottom: 20px;
}

.MB16 {
  margin-bottom: 16px;
}

.MB100 {
  margin-bottom: 100px;
}

.vBtn {
  color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  padding: 10px;
  border: 1px solid $azure;
  border-radius: 5px;
}

.vBox {
  width: 190px;
  height: 184px;
  position: relative;
}

.vNick {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.33;
  color: #222222;
}

.vCarousel {
  width: 200px;
  height: 24px;
}

.numBtn {
  color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  &:hover {
    color: white;
  }
}

.vBorder {
  border-bottom: solid 1px #d8d8d8;
  margin: 38px 0;
}

.cmtTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  color: #222222;
}

.cmtAzure {
  color: $azure;
}

.cmtInput {
  width: 480px;
  height: 120px;
  resize: none;
  border: 1px solid #dedede;
  border-radius: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 1.43;
  padding: 16px;
}

.cmtBtn {
  width: 120px;
  height: 120px;
  border: 1px solid #dedede;
  border-radius: 5px;
  color: white;
  background-color: $azure;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: bold;
}

::placeholder {
  color: #c5c5c5;
}

.circle {
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: gray;
  top: 0;
  right: 0;
  margin-top: 8px;
  margin-right: 8px;
}

.gap {
  width: 441px;
}

.dcMg {
  margin-top: 770px;
  margin-left: 48px;
}

.choiced {
  background-color: $azure;
}
</style>
