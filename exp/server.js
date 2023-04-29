const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit-data") {
    let jsonData = "";
    req.on("data", chunk => {
      jsonData += chunk;
    });
    req.on("end", () => {
      const data = JSON.parse(jsonData);
      fs.writeFile("data.json", jsonData, err => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Data written to file.");
      });
    });
  } else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("Page not found.");
  }
}).listen(3000);


