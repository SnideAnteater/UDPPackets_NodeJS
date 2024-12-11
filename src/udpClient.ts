// UDP Client implementation for receiving data packets
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import * as dgram from "dgram";  // UDP socket functionality

// Load environment variables
dotenv.config();
const app = express();

// Get configuration from environment variables
const CLIENT_PORT: any = process.env.CLIENTPORT;
const PORT: any = process.env.PORT;
const TARGETIP: any = process.env.TARGETIP;
const HOST: any = process.env.HOST;

// Initialize UDP socket for client
const client = dgram.createSocket("udp4");

// Handle incoming messages
client.on("message", (message, remote) => {
  console.log(`Received from ${remote.address}:${remote.port} - ${message}`);
});

// Handle potential errors
client.on("error", (err) => {
  console.error("Client error:", err);
  client.close();
});

// Bind the client to specified port and IP
client.bind(PORT, TARGETIP, () => {
  console.log(`Client listening on ${TARGETIP}:${PORT}`);
});
