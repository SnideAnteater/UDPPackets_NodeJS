import express, { Request, Response } from "express";
import dotenv from "dotenv";
import * as dgram from "dgram";

dotenv.config();
const app = express();

const SERVER_PORT: any = process.env.SERVERPORT;
const PORT: any = process.env.PORT;
const HOST: any = process.env.HOST;

// Create a UDP server
const server = dgram.createSocket("udp4");
// Sending data packets every second
setInterval(() => {
  const message = Buffer.from(
    JSON.stringify({ timestamp: Date.now(), message: "Hello from UDP server" })
  );
  // Send the packet to a client listening on the same port
  server.send(message, 0, message.length, PORT, HOST, (err) => {
    if (err) console.error(err);
    else console.log("Packet sent:", message.toString());
  });
}, 1000);
server.on("error", (err) => {
  console.error("Server error:", err);
  server.close();
});

server.on("listening", () => {
  const address = server.address();
  console.log(`Server listening on ${address.address}:${address.port}`);
});

server.bind(SERVER_PORT, HOST);
