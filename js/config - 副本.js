var BaseUrl =  "http://180.188.22.245:2025";
var ResourceUrl = 'http://180.188.22.245:10001/ttianwang/';

function getparam1(name) 
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return '';
}

if(window.location.pathname!='/'
    &&window.location.pathname!='/index.html'
    &&window.location.pathname!='/site/login.html'
    &&window.location.pathname!='/site/login_tw.html'
    &&window.location.pathname!='/site/wxredd.html')
{
    var wwid=window.localStorage.getItem("wwid");
    if(!wwid)
    {
        var qdt = getparam1("dt")

        if(qdt)
        {
            localStorage.setItem('cur_dt',qdt)
        }


        localStorage.setItem('enter_url',encodeURIComponent(window.location.href))

        window.location.href = '/index.html';
    }
}


        