const http = require('http')
const url = require('url')

function SetData(route, handle, testText)
{
    const server = http.createServer();
    server.addListener("request",onServerConnected)
    server.listen(8080);

    function onServerConnected(req, res)
    {
        let pathname = url.parse(req.url).pathname;
        route(pathname, handle, res)
        console.log(testText);
    }
}

//파일 밖에서 사용할 함수 혹은 변수를 등록해서 사용 가능 한듯
exports.SetData = SetData;