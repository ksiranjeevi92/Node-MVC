const http = require("http");

const options = {
    hostname: "jsonplaceholder.typicode.com",
    path: "/posts/1",
    method: "GET"
}

http.request(options, (res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        const result = JSON.parse(body);

        console.log(result);
    });

}).on("error", (err) => {
    console.log(err);
}).end();