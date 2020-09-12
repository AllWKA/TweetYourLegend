<template>
  <v-card-text>
    <!-- level monster -->
    <v-rating :value="monsterLevel" :color="colorLevel" dense half-increments readonly
              :size="levelSize"></v-rating>
    <!-- Monster Description -->
    <div>{{ description }}</div>
    <!-- Decision -->
    <div style="display: flex; flex-direction: column; align-items: center">
      <v-btn light x-small v-for="(option, i) in options" :key="i" class="desicion">{{ option }}</v-btn>
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
.desicion {
  font-size: 15px;
  margin-top: 3%;
  width: 70%;
}
</style>