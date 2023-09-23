const http = require('http');
const User = require('./controller');
const {getReqData} = require('./utils');


const PORT = 3000 || 5000;

const server = http.createServer(async (req, res) => {

    if(req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Hello, this is my API without frameworks");
        res.end();
    } else if(req.url === '/api/getUsers' && req.method === 'GET') {
        const user = await new User().getUsers();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(user));
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(JSON.stringify({message: "Route not found"}));
    }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));