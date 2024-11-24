
var test = "testInit";
function Route(path, handler, res)
{
    test = "testChanged"
    if(typeof handler[path] === "function")
    {
        console.log(handler[path]());
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(handler[path]());
        res.end();
    }
    else
    {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404NotFound");
        res.end();
    }
}

exports.Route = Route
exports.test = test;