const express = require('express');
const app = express();

const PORT = 7000;

app.use(express.static('./public'));

app.get('/', function(request, response) {
  response.sendFile('/public/index.html', {root: '.'});
});

app.get('/fake', function(request, response) {
  response.set('Content-Type', 'text/html');
  response.end('<h1>THIS IS HTML</h1>');
});

app.get('/hi', function(request, response) {
  console.log('request at /hi');
  response.end('hello');
});

app.get('/sloths', function(request, response) {
  console.log('requst at /sloths');
  response.end('so chill');
});

app.listen(PORT, function() {
  console.log(`Server up on ${PORT}`);
});
