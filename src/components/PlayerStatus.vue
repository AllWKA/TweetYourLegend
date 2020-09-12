<template>
  <div style="background-color: #1E1E1E">
    <!-- live -->
    <v-rating :length="maxLive" :value="live" readonly half-increments dark color="red" full-icon="mdi-heart"
              half-icon="mdi-heart-half-full" empty-icon="mdi-heart-outline"></v-rating>
    <!-- shield -->
    <v-rating :length="maxDefence" :value="defence" readonly half-increments dark color="brown" full-icon="mdi-shield"
              half-icon="mdi-shield-half-full" empty-icon="mdi-shield-outline"></v-rating>
    <!-- attack -->
    <v-rating :length="maxAttack" :value="attack" readonly half-increments dark color="grey" full-icon="mdi-sword-cross"
              half-icon="mdi-sword" empty-icon="mdi-checkbox-blank-circle-outline"></v-rating>
  </div>
</template>
<script>
export default {
  name: 'PlayerStatus',
  props:{
    live: Number,
    maxLive: Number,
    defence: Number,
    maxDefence: Number,
    attack: Number,
    maxAttack: Number
  }
}
</script>