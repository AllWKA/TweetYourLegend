<template>
  <div class="container">
    <v-btn light @click="$emit('ToggleLegendVisible', true)">show legend</v-btn>
    <v-dialog v-model="isLegendVisible" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card dark>
        <v-toolbar dark>
          <v-btn icon dark @click="$emit('ToggleLegendVisible', false)">
            <v-icon dark>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Your Legend</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text>Tweet</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="card-container" v-for="(resolution, i) in legend" :key="i">
          <div class="user-container">
            <v-avatar color="indigo">
              <v-icon dark>mdi-twitter</v-icon>
            </v-avatar>
            <p class="user-name">{{ username }}</p>
            <div class="copy-container">
              <v-btn @click="copyResolution(i)" small>
                <v-icon dense>mdi-content-copy</v-icon>
              </v-btn>
            </div>
          </div>
          <v-textarea :id="'resolution-'+i" :value="resolution" class="text-area" filled dark dense counter auto-grow>
          </v-textarea>
          <v-divider></v-divider>
          <v-icon>mdi-timeline-clock-outline</v-icon>
          <v-divider></v-divider>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'Legend',
  props: {
    isLegendVisible: Boolean,
    username:String,
    legend: Array
  },
  methods: {
    copyResolution(resolutionNum) {
      const input = document.getElementById('resolution-' + resolutionNum);
      input.select();
      document.execCommand("copy");
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 3%;
}

.card-container {
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3%;
  margin-top: 3%;
}

.user-container {
  display: flex;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  margin-bottom: 3%;
}

.user-name {
  margin-left: 3%;
  margin-top: 1%;
}

.text-area {
  padding: 3%;
}

.copy-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
}
</style>
