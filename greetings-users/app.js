const http = require("http");


const requestHandler = function (req, res) {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
        res.write('<head><title>Welcome to users page</title></head>');
        res.write('<body><form action="/user-create" method="POST"><input type="text" name="username" /><button type="submit">Save</button></form><body>')
        res.write('</html>');
        res.end();
    }
    if (url === "/users") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Welcome to users page</title></head>");
        res.write("<body><ul><li>Test User</li><li>Test user2</li></ul><body>")
        res.write("</html>");
        res.end();
    }

    if (url === "/user-create" && method === "POST") {
        const body = [];

        req.on("data", (chunk) => {
            body.push(chunk);
        });

        return req.on("end", () => {
            const reqData = Buffer.concat(body).toString();

            user = reqData.split("=")[1];

            console.log(user);

            res.statusCode = 304;

            res.setHeader("Location", "/");

            res.end();

        });
    }
}


const server = http.createServer(requestHandler);

server.listen(3000);
