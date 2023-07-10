const http = require("http");
const fs = require('fs');

function reListener(request, response) {
    // console.log(request.url, request.headers, request.method);
    const url = request.url;
    const method = request.method;
    if (request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Hello  Form</title></head>');
        response.write('<body><h1>Hello </h1> <form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body>');
        response.write('</html>');
        return response.end();
    }

    if (url === "/message" && method === 'POST') {
        const body = [];
        request.on("data", (chunk) => {
            body.push(chunk);
        });
        return request.on("end", () => {
            const requestData = Buffer.concat(body).toString();
            const message = requestData.split("=")[1];
            fs.writeFile("message.txt", message, err => {
                response.statusCode = 304;
                response.setHeader("Location", "/");
                return response.end();
            });

        });
    }

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Hello </title></head>');
    response.write('<body><h1>Messeg response</h1></body>');
    response.write('<h/tml>');
    response.end();
    // process.exit();
}

const server = http.createServer(reListener);

server.listen(3000);