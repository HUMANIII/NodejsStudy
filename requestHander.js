function requestView()
{
    return "requestView";
}
function requestGet()
{
    return "requestGet";
}
function requestPost()
{
    return "requestPost";
}
function requestUpdate()
{
   return "requestUpdate";
}

const Handle = {};
Handle["/"] = requestView;
Handle["/Get"] = requestGet;
Handle["/Post"] = requestPost;
Handle["/Update"] = requestUpdate;

exports.Handle = Handle;