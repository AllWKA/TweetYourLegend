<template>
  <div class="decision-container">
    <button v-for="(decision, i) in options" :key="i" class="decision" @click="sendDecision(decision, description)">
      {{ decision.optionDescription }}
      <v-icon>mdi-chat-processing</v-icon>
      <v-divider></v-divider>
    </button>
  </div>
</template>

<script>
export default {
  name: "Decisions",
  props: {options: Array, description: String},
  methods: {
    sendDecision(decision, description) {
      this.$emit('new-resolution', `* ${description}\n* ${decision.optionDescription}\n* ${decision.consequenceDescription}`)
    }
  }
}
</script>

<style scoped>
.decision-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.decision {
  font-size: 15px;
  margin-top: 3%;
  width: 70%;
  color: white;
  background-color: #292929;
}

</style>