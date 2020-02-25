<template>
  <div class="d-flex justify-center">
    <div class="gap"></div>
    <div class="main">
      <div v-if="page === 'checklist'">
        <checklist-detail />
      </div>
      <div v-if="page === 'join'">
        <upload-detail />
      </div>
    </div>
    <div class="gap">
      <detail-card class="dcMg" />
    </div>
  </div>
</template>

<script>
import ChecklistDetail from '@/components/detail/ChecklistDetail'
import UploadDetail from '@/components/detail/UploadDetail'
import DetailCard from '@/components/detail/DetailCard'

export default {
  components: {
    ChecklistDetail,
    UploadDetail,
    DetailCard
  },
  computed: {
    page() {
      return this.$store.state.detail.page
    }
  }
}
</script>

<style lang="scss" scoped>
.gap {
  width: 441px;
}

.dcMg {
  margin-left: 100px;
  margin-top: 1150px;
}
</style>
