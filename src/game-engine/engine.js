import store from '../store/index'

export default {
  getRngPosRoom
}

function getRngPosRoom() {
  const roomsLength = store.state.rooms.length;
  let position = 0;
  while (position === store.state.currentRoomPos) {
    position = Math.floor(Math.random() * (roomsLength));
  }
  return position;
}