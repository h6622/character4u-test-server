<template>
  <div class="d-flex justify-space-between">
    <div v-for="i in items" :key="i.index" class="hCard">
      <div class="d-flex justify-center MT5">
        <img :src="i.url" />
      </div>
      <div class="d-flex justify-center MT8 hTitle">
        {{ i.title }}
      </div>
      <div class="MT8">
        <div
          v-for="j in i.desc.split('\n')"
          :key="j"
          class="d-flex justify-center hDesc"
        >
          {{ j }}<br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import req1 from '@/assets/images/req1.png'
import req2 from '@/assets/images/req2.png'
import req3 from '@/assets/images/req3.png'
import req4 from '@/assets/images/req4.png'
import req5 from '@/assets/images/req5.png'

export default {
  data() {
    return {
      items: [
        {
          index: 0,
          url: req1,
          title: '가입하기',
          desc:
            '의뢰자 회원가입을 눌러\n모든 정보를 입력하고나면\n공모전 개최 준비 끝!'
        },
        {
          index: 1,
          url: req2,
          title: '개최하기',
          desc:
            '공모전 개최하기를 통해\n브리핑 입력과 상금 패키지 선택 후\n 결제하면 캐릭터 공모전 개최 완료'
        },
        {
          index: 2,
          url: req3,
          title: '기다리기',
          desc:
            '공모전 마감날에 특히 작품이\n많이 출품되므로 공모전\n종료일 까지 기다리는 것을 추천'
        },
        {
          index: 3,
          url: req4,
          title: '선정하기',
          desc:
            '공모전이 마감이 되고 난 후\n7일 이내로 1차 통과작 및\n우승작 선정은 필수'
        },
        {
          index: 4,
          url: req5,
          title: '완료하기',
          desc:
            '우승 작품의 원본 파일 및\n전문 에이전시의 컨설팅을\n받고난 후 공모전 완료 신청'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hCard {
  width: 210px;
  height: 210px;
}

.hTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #151515;
}

.hDesc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  text-align: center;
  line-height: 1.71;
  letter-spacing: -0.25px;
  color: #151515;
}
</style>
