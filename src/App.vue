<template>
  <v-app style="background-color: #1E1E1E">
    <div class="app">
      <MonsterImage :imgURL="$store.state.currentRoom.img" :title="$store.state.currentRoom.name"></MonsterImage>
      <MonsterDescription :description="$store.state.currentRoom.description" :monsterLevel="2.5" color-level="yellow"
                          :level-size="25" :options="$store.state.currentRoom.options"
                          @new-resolution="saveRoomResolution"/>
      <PlayerStatus :attack="3.5" :max-attack="5" :defence="1.5" :max-defence="3" :live="0.5" :max-live="2"/>
<!--      <v-btn dark @click="makeRoom">generate Room</v-btn>-->
      <p style="color: white; width: 100%; text-align: center" v-for="(resolution, i) in $store.state.legend" :key="i">{{ resolution }}</p>
    </div>
  </v-app>
</template>

<script>
import engine from './services/engine'
import MonsterImage from './components/MonsterImage'
import MonsterDescription from "@/components/MonsterDescription";
import PlayerStatus from "@/components/PlayerStatus";

export default {
  name: 'App',
  components: {
    PlayerStatus,
    MonsterDescription,
    MonsterImage
  },
  data: () => ({}),
  methods: {
    makeRoom() {
      this.$store.commit('setCurrentRoom', engine.getRngPosRoom());
    },
    saveRoomResolution(resolution) {
      this.$store.commit('saveRoom', resolution)
      this.makeRoom()
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
}
</style>
