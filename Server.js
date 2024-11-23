const http = require('http')
const url = require('url')

function SetData(route, handle)
{
    const server = http.createServer();
    server.addListener("request",onServerConnected)
    server.listen(8080);

    function onServerConnected(req, res)
    {
        let pathname = url.parse(req.url).pathname;
        route(pathname, handle, res)
    }
}
exports.SetData = SetData;