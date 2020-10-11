<template>
  <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;height: 100%;width: 100%">
    <div class="monster-image">
      <img :src="imgURL" style="max-height: 100%;max-width: 100%; min-height: 50%;min-width: 50%" alt="">
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
  width: 90%;
}

.monster-title {
  text-align: center;
  width: 100%;
  color: white;
}
</style>