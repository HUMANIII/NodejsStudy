// 이거 리턴값을 명시안해도 그냥 리턴이 됨 오류 많이 날거같음 무서움
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