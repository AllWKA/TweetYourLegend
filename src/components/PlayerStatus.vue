<template>
  <div class="container">
    <!-- live -->
    <v-rating :length="maxLive" :value="live" readonly half-increments dark color="red" full-icon="mdi-heart"
              half-icon="mdi-heart-half-full" empty-icon="mdi-heart-outline" background-color="red" style="background-color: #282828"></v-rating>
    <v-divider vertical></v-divider>
    <!-- shield -->
    <v-rating :length="maxDefence" :value="defence" readonly half-increments dark color="brown" full-icon="mdi-shield"
              half-icon="mdi-shield-half-full" empty-icon="mdi-shield-outline" background-color="brown" style="background-color: #282828"></v-rating>
    <v-divider vertical></v-divider>
    <!-- attack -->
    <v-rating :length="maxAttack" :value="attack" readonly half-increments dark color="grey" full-icon="mdi-sword-cross"
              half-icon="mdi-sword" empty-icon="mdi-checkbox-blank-circle-outline" background-color="grey" style="background-color: #282828"></v-rating>
  </div>
</template>
<script>
export default {
  name: 'PlayerStatus',
  props: {
    live: Number,
    maxLive: Number,
    defence: Number,
    maxDefence: Number,
    attack: Number,
    maxAttack: Number
  }
}
</script>

<style>
.container {
  background-color: #1E1E1E;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>