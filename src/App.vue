<template>
    <v-app>
        <v-card>
            <v-img height="250" :src="$store.state.currentRoom.img">
                <v-card-title style="color:white">{{$store.state.currentRoom.name}}</v-card-title>
            </v-img>
            <v-card-text>
                <!-- level monster -->
                <v-rating :value="$store.state.currentRoom.lvl" color="amber" dense half-increments readonly
                          size="14"></v-rating>

                <div>{{$store.state.currentRoom.description}}</div>
                <v-btn x-small v-for="(option, i) in $store.state.currentRoom.options" :key="i">
                    {{option}}
                </v-btn>
            </v-card-text>
        </v-card>
        <p>live:100</p>
        <v-btn dark @click="makeRoom">generate Room</v-btn>
    </v-app>
</template>

<script>
  import engine from './game-engine/engine'

  export default {
    name: 'App',
    components: {},
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
