const http = require('http');

const requestListner = (req, res) => {
  res.write('Hello Node');
  res.end();
}

const server = http.createServer();
server.on('request', requestListner);

server.listen(4242, () => {
  console.log('Server is listening')
});