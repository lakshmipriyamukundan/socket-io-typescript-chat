import { newChatRoom } from './chat-room'
import { Rooms } from './config/chat-rooms'

console.log(newChatRoom)

class RoomManager {

    public chatrooms = new Map(
        Rooms.map(c => [
          c.name,
          newChatRoom(c)
        ])
    )

    public removeClient(client) {
        this.chatrooms.forEach(c => c.removeUser(client))
    }

    public getChatroomByName(chatroomName) {
        return this.chatrooms.get(chatroomName)
    }

    public serializeChatrooms() {
        return Array.from(this.chatrooms.values()).map(c => c.serialize())
    }
}

export const newRoomManager = new RoomManager();




// const Chatroom = require('./Chatroom')
// const chatroomTemplates = require('../config/chatrooms')

// module.exports = function () {
//   // mapping of all available chatrooms
//   const chatrooms = new Map(
//     chatroomTemplates.map(c => [
//       c.name,
//       Chatroom(c)
//     ])
//   )

//   function removeClient(client) {
//     chatrooms.forEach(c => c.removeUser(client))
//   }

//   function getChatroomByName(chatroomName) {
//     return chatrooms.get(chatroomName)
//   }

//   function serializeChatrooms() {
//     return Array.from(chatrooms.values()).map(c => c.serialize())
//   }

//   return {
//     removeClient,
//     getChatroomByName,
//     serializeChatrooms
//   }
// }