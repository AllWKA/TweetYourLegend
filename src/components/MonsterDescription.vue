<template>
  <v-card-text>
    <!-- level monster -->
    <v-rating :value="monsterLevel" :color="colorLevel" dense half-increments readonly :size="levelSize"
              full-icon="mdi-alert-decagram" half-icon="mdi-alert-circle"
              empty-icon="mdi-alert-circle-outline"></v-rating>
    <!-- Monster Description -->
    <div>{{ description }}</div>
    <!-- Decision -->
    <div class="decision-container">
      <button v-for="(decision, i) in options" :key="i" class="decision" @click="sendDecision(decision, description)">
        {{ decision }}
        <v-icon dense>mdi-chat-processing</v-icon>
        <v-divider></v-divider>
      </button>
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
  methods: {
    sendDecision(decision, description) {
      console.log(`emitting resolution:\n${description}\n${decision}`)
      this.$emit('new-resolution', `${description}\n${decision}`)
    }
  }
}
</script>

<style scoped>
.decision {
  font-size: 15px;
  margin-top: 3%;
  width: 70%;
}

.decision-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>