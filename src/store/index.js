import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        player: {
            name: 'norman',
            lvl: 0,
            stats: {
                life: 1,
                maxLife: 1,
                shield: 1,
                maxShield: 1,
                attack: 1,
                maxAttack: 1
            }
        },
        legend: [],
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
                img: 'https://kpoplat.com/wp-content/uploads/2020/10/loren-lisa-1024x354.png',
                description: 'Derepente apareció ante mi un pie, pero en vez de dedos brazos y ojos en el talón.',
                options: [
                    {
                        optionDescription: 'Salí corriendo del pestazo.',
                        consequenceDescription: 'Pude escapar.',
                        consequences: {
                            life: 0,
                            maxLife: 0,
                            shield: 0,
                            maxShield: 0,
                            attack: 0,
                            maxAttack: 0
                        }
                    },
                    {
                        optionDescription: 'Le corté las uñas de las manos.',
                        consequenceDescription: 'Pero una uña me rebentó el ojo por no llevar gafas de protección.',
                        consequences: {
                            life: -1
                        }
                    },
                    {
                        optionDescription: 'Me fui, sus ojos apuntaban en dirección contraria.',
                        consequenceDescription: 'Pero el pestazo se ha impregnado en mi y me da nauseas.',
                        consequences: {
                            life: -1
                        }
                    }]
            },
            {
                name: 'Pacheco',
                lvl: 3,
                img: 'http://www.iunat.ulpgc.es/images/miembros/JMPacheco.JPG',
                description: 'Derepente me encontre un profesor lanzando una manzana por la ventana',
                options: [{
                    optionDescription: 'Le pedi perdon.',
                    consequenceDescription: 'Él me suspendió.',
                    consequences: {
                        life: 0,
                        maxLife: 0,
                        shield: 0,
                        maxShield: 0,
                        attack: 0,
                        maxAttack: 0
                    }
                }, {
                    optionDescription: 'Saque otra manzana.',
                    consequenceDescription: 'Él me tiró por la ventana.',
                    consequences: {
                        life: -3
                    }
                }]
            },
            // example interface
            {
                name: 'name',
                lvl: 0,
                img: 'img src',
                description: 'description',
                options: [{
                    optionDescription: 'option description',
                    consequenceDescription: 'option consequence description',
                    consequences: {
                        life: 0,
                        maxLife: 0,
                        shield: 0,
                        maxShield: 0,
                        attack: 0,
                        maxAttack: 0
                    }
                }]
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
        },
        saveRoom(state, roomResolution) {
            state.legend.push(roomResolution);
        }
    },
    actions: {
        setCurrentRoom() {

        }
    },
    modules: {}
})
