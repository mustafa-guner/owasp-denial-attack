const http = require('http');

const targetHost = 'localhost';
const targetPort = 3000;
const numConnections = 100;

for (let i = 0; i < numConnections; i++) {
  const options = {
    hostname: targetHost,
    port: targetPort,
    method: 'GET',
    headers: {
      'Connection': 'keep-alive',
      'User-Agent': `PartialRequest${i}`,
      'Content-Length': '1',
    }
  };

  const req = http.request(options);
  req.end();
}

console.log(`Sent ${numConnections} partial HTTP requests to ${targetHost}:${targetPort}`);

