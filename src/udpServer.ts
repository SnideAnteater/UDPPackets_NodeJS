// UDP Server implementation for sending data packets
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import * as dgram from "dgram";

// Load environment variables
dotenv.config();
const app = express();

// Get configuration from environment variables
const SERVER_PORT: any = process.env.SERVERPORT;
const PORT: any = process.env.PORT;
const TARGETIP: any = process.env.TARGETIP;
const HOST: any = process.env.HOST;

// Initialize UDP socket for server
const server = dgram.createSocket("udp4");

// Sending data packets every second
setInterval(() => {

  // Protocol definition for coordinates
  // Format: [header, type, coordinates, checksum]
  // 0x77 0xfb: Protocol header
  // 0x02: Message type (coordinates)
  // Following bytes: coordinate data

// // Screen Size Protocol
// const message2 = Buffer.from([ 
//   0x77, 0xfb, 0x01, 0x04, 0xb0, 0x03, 0x20, 0xd8]);

// Coordinates Protocol multiple coordinates
const message2 = Buffer.from([
0x77, 0xfb, 0x02, 0x01, 0x13, 0x01, 0x51, 0x01, 0x13, 0x01, 0x38, 0xb5]);

// // Coordinates Protocol for 1 coordinate
// const message2 = Buffer.from([
// 0x77, 0xfb, 0x02, 0x02, 0x0d, 0x00, 0x57, 0x68]);


// Send the packet to a client listening on the same port
server.send(message2, 0, message2.length, PORT, TARGETIP, (err) => {
  if (err) console.error(err);
  else console.log("Packet sent:", message2); // Log the raw buffer
});
}, 1000);

// Handle potential errors
server.on("error", (err) => {
  console.error("Server error:", err);
  server.close();
});

// Log when server starts listening
server.on("listening", () => {
  const address = server.address();
  console.log(`Server listening on ${address.address}:${address.port}`);
});

// Bind the server to specified port and IP
server.bind(SERVER_PORT, TARGETIP);
