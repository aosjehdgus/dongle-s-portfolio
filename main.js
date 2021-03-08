var http = require('http');
var fs = require('fs');
// url이라는 모듈을 url이라는 변수로 사용할 것이다.
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
       
    }
    response.writeHead(200);
    
    var template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        <h1><a href = "/">WEB</a></h1>
        <ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=Javascript">Javascript</a></li>
        </ul>

        <h2>${title}</h2>

        <p>HTML is HTML</p>
        
    </body>
    </html>
    
    `;

    response.end(template);
    
 
});
app.listen(3000);

// 사용자에게 전송할 데이터를 생성한다 (nodejs가 가지고 있는 힘)