const server = require('./Server');
const rooter = require('./Router');
const handler = require('./requestHander');

server.SetData(rooter.Route, handler.Handle);
