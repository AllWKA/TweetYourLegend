<template>
  <div>
    <v-img height="250" :src="imgURL" class="monster-image"></v-img>
    <h3 class="monster-title">{{ title }}</h3>
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
.monster-image {
  border: 5px solid #000000;
}

.monster-title {
  text-align: center;
  width: 100%;
}
</style>