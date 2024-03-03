const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("Hello");
  });
  // console.log(req.url, req.method);
  //Set Header content type
  res.setHeader("Content-Type", "text/html");
  let path = "./view/";

  switch (req.url) {
    case "/":
      path += "home.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.setHeader("Location", "/about");
      res.statusCode = 301;
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  // res.write("<p>Hello ninjas</p>");
  // res.write("<p>again Hello ninjas</p>");
  // res.write("<p>and again Hello ninjas</p>");
  // res.end();

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, host, () => {
  console.log("Listening on port 3000");
});
