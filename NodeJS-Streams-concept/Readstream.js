const fs = require('fs');


//create read stream 
const readStream = fs.createReadStream("./example.txt", "utf-8");

readStream.on("data", (chunk) => {
    console.log("reading chunk", chunk);
});

readStream.on('end', () => {
    console.log('Reading Ended');
});

readStream.on('error', (err) => {
    console.log('Error ', err)
});