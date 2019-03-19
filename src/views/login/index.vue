<template>
  <div>
    <el-button @click="createPost">测试请求</el-button>
  </div>
</template>
<script>

import { getTest } from 'fetch'
export default {
  data() { return {} },
  created() { },
  mounted() { },
  methods: {
    createPost() {
      getTest(_ => {
        console.log(_)
      })
    }
  }
}
</script>
<style lang="scss">
</style>