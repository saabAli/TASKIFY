const http = require ('http');

const HOSTNAME= 'localhost'
const PORT = 9000
const server = http .createServer((req, res) => {
    if (req.url.startswiith ('/tasks')) {
        taskRoutes(req, res)
    }else{
        res.writeHead(404, 'Not Found', {'content-type': 'application/json'})
        res.end(JSON.stringify({
            message: 'sorry, you got lost!'
        })) 
    }
});

server.listen(PORT.HOSTNAME, () => {
console.log('server running on port ${PORT}')
})
