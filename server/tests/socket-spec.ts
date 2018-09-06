import * as io from "socket.io-client";

import { register } from "../src/type-interfaces";

let socket = io("http://localhost:8080");

socket.on("connect", () => {
  console.log("mmmmmmmmmmmmmmm");
});

const regData = { name: "lakshmi", email: "lak" };

socket.emit("register", regData);

socket.on("newuser-added", (users: register[]) => {
  console.log(users);
});
// beforeEach(function(done) {
//   // Setup
//   let socket = io("http://localhost:8080");
//   socket.on("connect", function() {
//     console.log("worked...");
//     done();
//   });
//   socket.on("disconnect", function() {
//     console.log("disconnected...");
//   });
// });

// describe("Socket testing", () => {
//   it("tes", done => {
//     console.log("jjj");
//     return;
//   });
// });
