<template>
  <v-app style="background-color: #1E1E1E; width: 100%;height: 100%">
    <div class="app">
      <div style="max-width: 100%; max-height: 40%;">
        <MonsterImage :imgURL="$store.state.currentRoom.img" :title="$store.state.currentRoom.name"></MonsterImage>
      </div>
      <MonsterDescription :description="$store.state.currentRoom.description" :monsterLevel="2.5" color-level="yellow"
                          :level-size="25"/>
      <PlayerStatus :attack="3.5" :max-attack="5" :defence="1.5" :max-defence="3" :live="0.5" :max-live="2"
                    style="width: 100%"/>
      <decisions :options="$store.state.currentRoom.options" :description="$store.state.currentRoom.description"
                 @new-resolution="saveRoomResolution"></decisions>
      <Legend @ToggleLegendVisible="toggleIsLegendVisible" :is-legend-visible="isLegendVisible" :username="Paco" :legend="$store.state.legend"/>
    </div>
  </v-app>
</template>

<script>
import engine from './services/engine'
import MonsterImage from './components/MonsterImage'
import MonsterDescription from "@/components/MonsterDescription";
import PlayerStatus from "@/components/PlayerStatus";
import Decisions from "@/components/Decisions";
import Legend from "@/Legend";

export default {
  name: 'App',
  components: {
    Legend,
    Decisions,
    PlayerStatus,
    MonsterDescription,
    MonsterImage
  },
  data() {
    return {
      isLegendVisible: false
    }
  },
  methods: {
    saveRoomResolution(resolution) {
      this.$store.commit('saveRoom', resolution)
      this.$store.commit('setCurrentRoom', engine.getRngPosRoom());
    },
    toggleIsLegendVisible(isLegendVisible) {
      this.isLegendVisible = isLegendVisible;
    }
  },
  mounted() {
    this.$store.commit('setCurrentRoom', engine.getRngPosRoom());
  }
};
</script>

<style scoped>
.app {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
