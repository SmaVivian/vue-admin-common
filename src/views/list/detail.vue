<template>
  <div class="app-container">
    <div>
      id: {{data.id}}
    </div>
    <div>
      {{data.detail}}
    </div>
    <div v-html="data.detailContent"></div>
  </div>
</template>

<script>
import { getDetail } from '@/api/list'
export default {
  data() {
    return {
      data: ''
    }
  },
  methods: {
    getData() {
      getDetail({
        id: this.$route.query.id
      }).then(res => {
        this.data = res.data
      })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>

</style>

