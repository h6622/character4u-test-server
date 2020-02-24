<template>
  <div>
    <div></div>
    <div class="d-flex justify-center MT40">
      <brief-card />
    </div>
    <div class="d-flex justify-center title MT40 MB40">공모전 상세 정보</div>
    <div class="W400">
      <div class="cTitle">공모전 제목</div>
      <div class="cDesc">공모전 제목이 여기에 들어가게 됩니다!</div>
      <div class="cTitle">의뢰자(회사명)</div>
      <div class="cDesc">금강에프엔비</div>
      <div class="cTitle">회사 및 단체소개</div>
      <div class="cDesc">
        맛있고 건강하게 소중한 우리아이의 간식을 생산하는 브랜드 "TAKE IT" 의
        첫번째 이야기<br /><br />

        동결건조 와 열풍건조 를 이용한 제품으로 국내산 100%과일을 통채로
        동결건조시켜 만든 제품입니다.<br /><br />

        제품은 총 3가지로 동결건조 딸기 / 사과 / 제주감귤 입니다.
      </div>
      <div class="cTitle">공모전 상금</div>
      <div class="cDesc">
        1등 상금: 500만원<br />
        2등 상금: 200만원<br />
        3등 상금: 100만원<br /><br />

        * 공모전 상금은 우승자 발표 후 원본 파일을 제출해주셔야 지급이
        완료됩니다.
      </div>
      <div class="cTitle">공모전 상세 설명</div>
      <div class="cDesc">
        저희는 동결건조 과일(딸기.사과,귤) 을 생산하는 회사입니다.<br />
        신규브랜드 런칭에 앞서 제품에 적용될 캐릭터디자인을 응모하고자
        합니다.<br />
        브랜드명 TAKE IT 을 표현할수 있는 곰(귀여운) 의 캐릭터 디자인<br />
        곰이 딸기를 먹거나 딸기를 들고 있는 모습을 형상화한 캐릭터<br /><br />

        이모티콘, 굿즈 제품으로 응용될수있는 창의적인 캐릭터 기본형 1종 간단한
        설명과 함께 앞, 옆, 뒤 & 응용동작 3가지 이상<br /><br />

        디자인 파일 제출의 경우<br />
        딸기와 사과. 감귤칩 을 먼저 생산하고 추후 요거트 큐브 , 젤리 등을
        생산예정에 있습니다.
      </div>
      <div class="cTitle">참고자료</div>
      <div class="cDesc">
        공모전에 참여하시는 경우 의뢰자가 올린 첨부파일을 꼭 확인해주세요.
      </div>
      <div class="d-flex justify-space-between download">
        <div><a class="fAzure">참고자료 및 의뢰내용 상세.zip</a></div>
        <div>{icon}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BriefCard from '@/components/detail/BriefCard'

export default {
  components: {
    BriefCard
  }
}
</script>

<style lang="scss" scoped>
.MT40 {
  margin-top: 40px;
}

.MB40 {
  margin-bottom: 40px;
}

.title {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: $azure;
  line-height: 1.38;
}

.W400 {
  width: 400px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.cTitle {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  line-height: 1.38;
}

.cDesc {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  color: #222222;
  line-height: 1.57;
  margin-top: 8px;
  margin-bottom: 32px;
}

.download {
  width: 100%;
  height: 72px;
  padding: 24px 32px;
  border-radius: 5px;
  border: solid 1px #dedede;
  background-color: #ffffff;
}

.fAzure {
  color: $azure;
  text-decoration: underline;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
}
</style>
