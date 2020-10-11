<template>
  <v-card-text style="padding: 0">
    <div class="container">
      <!-- level monster -->
      <v-rating :value="monsterLevel" :color="colorLevel" half-increments readonly :size="levelSize"
                full-icon="mdi-alert-decagram" half-icon="mdi-alert-circle"
                empty-icon="mdi-alert-circle-outline"></v-rating>
      <!-- Monster Description -->
      <div class="description-container">{{ description }}</div>
    </div>
  </v-card-text>
</template>

<script>
export default {
  name: 'MonsterDescription',
  props: {
    monsterLevel: Number,
    colorLevel: String,
    levelSize: Number,
    description: String
  }
}
</script>

<style scoped>

.description-container {
  color: white;
  width: 100%;
  min-height: 100px;
  /*text-align: center;*/
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>