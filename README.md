# NMS Glass Rotunda

A UDP client-server application built with Node.js, TypeScript, and Express.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
  - Download from: [https://nodejs.org/](https://nodejs.org/)
  - Installation guide: [Node.js Installation Instructions](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
- npm (Node Package Manager - comes with Node.js)
- Visual Studio Code (recommended IDE)
  - Download from: [https://code.visualstudio.com/](https://code.visualstudio.com/)

## Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/nms-glassrotunda.git
cd nms-glassrotunda
```

2. Install dependencies:
```
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=<your_port>
CLIENTPORT=<client_port>
SERVERPORT=<server_port>
TARGETIP=<target_ip>
HOST=<host>
```

Example `.env` configuration:
```
PORT=6666
CLIENTPORT=6667
SERVERPORT=6668
TARGETIP=127.0.0.1
HOST=localhost
```

## Usage

The application can be run in three different modes:

### Start the UDP Server
```
npm run startServer
```
This will compile the TypeScript files and start the UDP server, which sends data packets every second.

### Start the UDP Client
```
npm run startClient
```
This will compile the TypeScript files and start the UDP client, which listens for incoming packets.

### Start the Web Server
```
npm run start
```
This will compile the TypeScript files and start the Express web server.

## Project Structure
```
nms-glassrotunda/
├── src/
│   ├── index.ts        # Express web server
│   ├── udpClient.ts    # UDP client implementation
│   └── udpServer.ts    # UDP server implementation
├── package.json
├── .env
└── README.md
```

## Development

To modify the UDP packet data, edit the `message2` buffer in `src/udpServer.ts`. The current implementation sends coordinate protocol data in a specific format.

## Troubleshooting

Common issues and solutions:

1. **Node.js is not recognized**
   - Ensure Node.js is properly installed by running `node --version` in your terminal
   - If not recognized, try restarting your computer after installation

2. **npm install fails**
   - Try running `npm cache clean --force` and then `npm install` again
   - Ensure you have proper internet connection

3. **TypeScript errors**
   - Make sure TypeScript is installed globally: `npm install -g typescript`
   - Check your TypeScript version: `tsc --version`

## Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Git Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## License

ISC