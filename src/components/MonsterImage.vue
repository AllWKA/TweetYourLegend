<template>
  <div>
    <v-img height="250" :src="imgURL" style="border: 5px solid #000000;"></v-img>
    <h3 style="text-align: center; width: 100%">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "MonsterImage",
  props: {
    imgURL: String,
    title: String
  }
}
</script>

<style scoped>
</style>