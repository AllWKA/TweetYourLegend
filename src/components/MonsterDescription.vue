<template>
  <v-card-text>
    <!-- level monster -->
    <v-rating :value="monsterLevel" :color="colorLevel" dense half-increments readonly
              :size="levelSize"></v-rating>
    <!-- Monster Description -->
    <div>{{ description }}</div>
    <!-- Decision -->
    <v-btn x-small v-for="(option, i) in options" :key="i">{{ option }}</v-btn>
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
  methods:{
  }
}
</script>