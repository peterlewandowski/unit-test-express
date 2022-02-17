const app = require('../src/index')
const http = require('http')

const server = http.createServer(app)

const port = 8001;

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// this file runs the application, need to make the appropriate change in package.json
