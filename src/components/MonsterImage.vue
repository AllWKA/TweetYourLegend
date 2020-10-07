<template>
  <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
    <div class="monster-image">
      <img :src="imgURL" style="height: 100%;width: 100%" alt="">
    </div>
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
  height: 90%;
  width: 100%;
}

.monster-title {
  text-align: center;
  width: 100%;
  color: white;
}
</style>