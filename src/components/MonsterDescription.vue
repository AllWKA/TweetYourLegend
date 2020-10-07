<template>
  <v-card-text>
    <div class="container">
      <!-- level monster -->
      <v-rating :value="monsterLevel" :color="colorLevel" half-increments readonly :size="levelSize"
                full-icon="mdi-alert-decagram" half-icon="mdi-alert-circle"
                empty-icon="mdi-alert-circle-outline"></v-rating>
      <!-- Monster Description -->
      <div class="description-container">{{ description }}</div>
      <!-- Decision -->
      <div class="decision-container">
        <button v-for="(decision, i) in options" :key="i" class="decision" @click="sendDecision(decision, description)">
          {{ decision }}
          <v-icon>mdi-chat-processing</v-icon>
          <v-divider></v-divider>
        </button>
      </div>
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
  color: white;
  background-color: #292929;
}

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

.decision-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>