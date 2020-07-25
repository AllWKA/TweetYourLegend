import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    legend: '',
    currentRoom: {
      name: '',
      lvl: 0,
      img: '',
      description: '',
      options: []
    },
    currentRoomPos: 0,
    rooms: [
      {
        name: 'Petuzac',
        lvl: 6,
        img: 'https://previews.123rf.com/images/lightwise/lightwise1705/lightwise170500020/77451571-pies-azules-del-monstruo-como-s%C3%ADmbolo-espeluznante-de-halloween-o-de-miedo-del-zombi-con-la-piel-y-los.jpg',
        description: 'Derepente apareció ante mi un pie, pero en vez de dedos brazos y ojos en el talón.',
        options: ['Salí corriendo del pestazo', 'le corté las uñas de las manos', 'me fui, sus ojos apuntaban en dirección contraria']
      },
      {
        name: 'Pacheco',
        lvl: 3,
        img: 'http://www.iunat.ulpgc.es/images/miembros/JMPacheco.JPG',
        description: 'Derepente me encontre un profesor lanzando una manzana por la ventana',
        options: ['le pedi perdon y él me suspendió', 'saque otra manzana y él me tiró por la ventana']
      }
    ],
  },
  mutations: {
    setCurrentRoom(state, roomPos) {
      state.currentRoomPos = roomPos;
      state.currentRoom = state.rooms[roomPos];
    },
    pickRoom() {
      const roomsLength = this.rooms.length;
      const roomPos = Math.floor(Math.random() * (roomsLength));
      return this.rooms[roomPos]
    }
  },
  actions: {
    setCurrentRoom() {

    }
  },
  modules: {}
})
