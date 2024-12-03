import express, { Request, Response } from "express";
import dotenv from "dotenv";
import * as dgram from "dgram";

dotenv.config();
const app = express();

const CLIENT_PORT: any = process.env.CLIENTPORT;
const PORT: any = process.env.PORT;
const TARGETIP: any = process.env.TARGETIP;
const HOST: any = process.env.HOST;

// Create a UDP client
const client = dgram.createSocket("udp4");

client.on("message", (message, remote) => {
  console.log(`Received from ${remote.address}:${remote.port} - ${message}`);
});

client.on("error", (err) => {
  console.error("Client error:", err);
  client.close();
});

client.bind(PORT, TARGETIP, () => {
  console.log(`Client listening on ${TARGETIP}:${PORT}`);
});
