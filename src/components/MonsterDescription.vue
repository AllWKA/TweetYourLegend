<template>
  <v-card-text>
    <!-- level monster -->
    <v-rating :value="monsterLevel" :color="colorLevel" dense half-increments readonly :size="levelSize"
              full-icon="mdi-alert-decagram" half-icon="mdi-alert-circle"
              empty-icon="mdi-alert-circle-outline"></v-rating>
    <!-- Monster Description -->
    <div>{{ description }}</div>
    <!-- Desition -->
    <div class="desition-container">
      <v-btn light x-small v-for="(option, i) in options" :key="i" class="desition">{{ option }}</v-btn>
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
    description: String,
    options: Array
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped>
.desition {
  font-size: 15px;
  margin-top: 3%;
  width: 70%;
}

.desition-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>