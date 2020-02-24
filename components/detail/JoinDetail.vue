<template>
  <div>
    <div v-if="page === 'checklist'">
      <checklist-detail />
    </div>
  </div>
</template>

<script>
import ChecklistDetail from '@/components/detail/ChecklistDetail'

export default {
  components: {
    ChecklistDetail
  },
  data() {
    return {
      page: 'checklist'
    }
  }
}
</script>
