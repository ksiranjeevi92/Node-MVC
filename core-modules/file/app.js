const fs = require("fs");

fs.writeFile("example.txt", "some teext", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.unlink("example.txt", (err) => {
  if (err) {
    console.log(err);
  }
});
