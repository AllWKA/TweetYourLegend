<template>
  <v-img height="250" :src="imgURL">
    <v-card-title style="color:black">{{title}}</v-card-title>
  </v-img>
</template>

<script>
export default {
  name: "MonsterImage",
  props:{
    imgURL: String,
    title: String
  }
}
</script>

<style scoped>
</style>