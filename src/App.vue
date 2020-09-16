<template>
  <v-app style="background-color: #1E1E1E">
    <v-card dark>
      <MonsterImage :imgURL="$store.state.currentRoom.img" :title="$store.state.currentRoom.name"></MonsterImage>
      <PlayerStatus :attack="3.5" :max-attack="5" :defence="1.5" :max-defence="3" :live="0.5" :max-live="2"/>
      <MonsterDescription :description="$store.state.currentRoom.description" :monsterLevel="2.5" color-level="yellow"
                          :level-size="25" :options="$store.state.currentRoom.options"/>
    </v-card>
    <v-btn dark @click="makeRoom">generate Room</v-btn>
  </v-app>
</template>

<script>
import engine from './game-engine/engine'
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
    }
  },
  mounted() {
    this.$store.commit('setCurrentRoom', engine.getRngPosRoom());
  }
};
</script>
