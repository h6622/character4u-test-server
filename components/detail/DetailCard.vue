<template>
  <div class="dcard">
    <div class="dtitle">
      캐릭터포유 매니저가 알려주는 공모전 꿀팁!
    </div>
    <div class="dmargin">
      <button
        @click="onClick(i.index)"
        v-for="i in items"
        :key="i.index"
        :class="[i.mry, i.clicked ? 'clicked' : '']"
        class="btn"
      >
        {{ i.id }}
      </button>
    </div>
    <div class="content">
      {{ items[selected].content }}
    </div>
    <div class="desc">
      {{ items[selected].desc }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          index: 0,
          id: '#브리핑',
          mry: 'mr my',
          clicked: true,
          content: '지피지기백전백승! 브리핑내용을 알면 우승이 보입니다!',
          desc:
            '아무리 멋진 캐릭터 디자인을 출품해도 의뢰자가 원하는 방향과 맞지않으면 우승은 그야말로 그림의 떡! 우승을 향한 첫 걸음은 바로 의뢰인의 요청사항이 적힌 브리핑을 자세히 들여다 보는 것입니다.'
        },
        {
          index: 1,
          id: '#썸네일',
          mry: 'mr my',
          clicked: false,
          content: '썸네일은 곧 작품의 얼굴입니다!',
          desc:
            '썸네일은 작품에 대한 첫 인상을 결정짓게 됩니다. 자신의 작품이 가장 돋보이도록 하는 멋진 썸네일 등록을 절대로 잊지 마세요!'
        },
        {
          index: 2,
          id: '#상세이미지',
          mry: 'my',
          clicked: false,
          content: '우승을 향한 최종 관문은 출품작 상세이미지의 완성도입니다!',
          desc:
            '썸네일로 강한 첫 인상을 남겼다면, 상제이미지로 의뢰자를 사로잡아보세요. 캐릭터 디자인이 실제로 상품화가 되면 어떤 모습일지 mock-up을 보여주는 것으로 작품을 더욱 매력적으로 보이게 만들 수 있습니다.'
        },
        {
          index: 3,
          id: '#우승확률',
          mry: 'mr',
          clicked: false,
          content: '우승확률이 높은 공모전을 공략해보세요!',
          desc:
            '썸네일로 강한 첫 인상을 남겼다면, 상제이미지로 의뢰자를 사로잡아보세요. 캐릭터 디자인이 실제로 상품화가 되면 어떤 모습일지 mock-up을 보여주는 것으로 작품을 더욱 매력적으로 보이게 만들 수 있습니다.'
        },
        {
          index: 4,
          id: '#저작권유의',
          mry: 'mr',
          clicked: false,
          content: '저작권 문제 여부는 반드시 체크해주세요!',
          desc:
            '우승작으로 선정된 디자인이 저작권 문제가 발생할 시 상금회수, 이용정지 뿐 아니라 추가적인 2차 손해배상까지 청구될 수 있습니다. 유사한 디자인은 없는지 미리 확인하여 본인만의 독창적인 디자인으로 참여하세요.'
        },
        {
          index: 5,
          id: '#원본파일',
          mry: '',
          clicked: false,
          content: '우승한 경우 반드시 원본 ai파일을 제출해주세요.',
          desc:
            '우승확정 후 7일내 info@character4U.com으로 원본 ai파일을 제출해주세요. 원본 제출 확인 후 상금이 지급되며 기간 내 원본 파일 미제출 또는 다른 형식의 파일 제공 시 우승취소 및 기타 불이익을 받으실 수 있습니다.'
        }
      ],
      selected: 0
    }
  },
  methods: {
    onClick(i) {
      if (i === 0) {
        this.items[0].clicked = true
        this.items[1].clicked = false
        this.items[2].clicked = false
        this.items[3].clicked = false
        this.items[4].clicked = false
        this.items[5].clicked = false
        this.selected = 0
      } else if (i === 1) {
        this.items[1].clicked = true
        this.items[0].clicked = false
        this.items[2].clicked = false
        this.items[3].clicked = false
        this.items[4].clicked = false
        this.items[5].clicked = false
        this.selected = 1
      } else if (i === 2) {
        this.items[2].clicked = true
        this.items[0].clicked = false
        this.items[1].clicked = false
        this.items[3].clicked = false
        this.items[4].clicked = false
        this.items[5].clicked = false
        this.selected = 2
      } else if (i === 3) {
        this.items[3].clicked = true
        this.items[0].clicked = false
        this.items[1].clicked = false
        this.items[2].clicked = false
        this.items[4].clicked = false
        this.items[5].clicked = false
        this.selected = 3
      } else if (i === 4) {
        this.items[4].clicked = true
        this.items[0].clicked = false
        this.items[1].clicked = false
        this.items[2].clicked = false
        this.items[3].clicked = false
        this.items[5].clicked = false
        this.selected = 4
      } else if (i === 5) {
        this.items[5].clicked = true
        this.items[0].clicked = false
        this.items[1].clicked = false
        this.items[2].clicked = false
        this.items[3].clicked = false
        this.items[4].clicked = false
        this.selected = 5
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dcard {
  width: 316px;
  height: 320px;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #f6f6f6;
  background-color: #ffffff;
}

.dtitle {
  width: 210px;
  height: 40px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #29b7bd;
  line-height: 1.25;
  margin-top: 24px;
  margin-left: 24px;
}

.dmargin {
  margin: 24px 22px 16px 24px;
}

.btn {
  width: 84px;
  height: 32px;
  border-radius: 5px;
  border: solid 1px #dedede;
  background-color: #ffffff;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  line-height: 1.67;
}

.mr {
  margin-right: 8px;
}

.my {
  margin-bottom: 8px;
}

.content {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: #222222;
  line-height: 1.33;
  width: 200px;
  margin-left: 24px;
  margin-bottom: 8px;
}

.desc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: #222222;
  line-height: 1.5;
  width: 269px;
  margin-left: 24px;
}

.clicked {
  border: 1px solid $azure;
  color: $azure;
}
</style>
