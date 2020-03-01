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
import dsg1 from '@/assets/images/dsg1.png'
import dsg2 from '@/assets/images/dsg2.png'
import dsg3 from '@/assets/images/dsg3.png'
import dsg4 from '@/assets/images/dsg4.png'
import dsg5 from '@/assets/images/dsg5.png'

export default {
  data() {
    return {
      items: [
        {
          index: 0,
          url: dsg1,
          title: '가입하기',
          desc:
            '디자이너 회원가입을 눌러\n모든 정보를 입력하고나면\n공모전 참여 준비 끝!'
        },
        {
          index: 1,
          url: dsg2,
          title: '개최하기',
          desc:
            '다양한 분야와 상금이 걸린\n공모전 리스트를 살펴보고\n자신있는 공모전에 도전!'
        },
        {
          index: 2,
          url: dsg3,
          title: '참여하기',
          desc:
            '공모전 마감일 놓치지 않고\n출품작 업로드하면\n공모전 참여 완료!'
        },
        {
          index: 3,
          url: dsg4,
          title: '우승하기',
          desc:
            '참여한 공모전에서 우승을 하면\n캐릭터포유 관리팀 안내에 따라\n필요한 절차 밟기'
        },
        {
          index: 4,
          url: dsg5,
          title: '수정하기',
          desc:
            '최대 3회까지의 수정작업\n(프리미엄 공모전 제외) 후\n상금이 개인계좌로 입금!'
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
