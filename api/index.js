const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

// db.json ka path sahi hona chahiye
const router = jsonServer.router(path.join(process.cwd(), 'db.json'))

server.use(middlewares)

// Is line se saari requests handle hongi
server.use(jsonServer.rewriter({
    "/api/*": "/$1"
}))
server.use(router)

// Vercel ke liye server ko listen nahi, export karna hota hai
module.exports = server
