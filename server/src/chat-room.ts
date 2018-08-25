
// export const resolver = { chatroom }

class ChatRoom {
    public members = new Map();
    public chatHistory = [];

    public broadcastMessage(message) {
        this.members.forEach(m => m.emit('message', message));
    }

    public addEntry(entry) {
        this.chatHistory = this.chatHistory.concat(entry);
    }

    public getChatHistory() {
        return this.chatHistory.slice();
    }

    public addUser(client) {
        this.members.set(client.id, client);
    }

    public removeUser(client) {
        this.members.delete(client.id);
    }

    public serialize() {
        return {
            name,
            numMembers: this.members.size
        }
    }

}

export const newChatRoom = new ChatRoom();
// function chatroom() {
//     return new ChatRoom()
// }
// export const chatRoom = ({ name, image }) => {
//     const members = new Map()
//     let chatHistory = []
  
//     function broadcastMessage(message) {
//       members.forEach(m => m.emit('message', message))
//     }
  
//     function addEntry(entry) {
//       chatHistory = chatHistory.concat(entry)
//     }
  
//     function getChatHistory() {
//       return chatHistory.slice()
//     }
  
//     function addUser(client) {
//       members.set(client.id, client)
//     }
  
//     function removeUser(client) {
//       members.delete(client.id)
//     }
  
//     function serialize() {
//       return {
//         name,
//         image,
//         numMembers: members.size
//       }
//     }
//   }


  