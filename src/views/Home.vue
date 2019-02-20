<template>
  <div class="home">
    <el-input v-model="testData"></el-input>
    <router-link to="/about">to</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data(){
      return {
          testData: ""
      }
  }
}
</script>
