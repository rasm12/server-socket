
const ServerClass = require('./models/server')

require('dotenv').config();

const server = new ServerClass()

server.execute();

