const { people, name, os } = require("./people");
const fs = require("fs");

console.log("First line");

// names.forEach((name) => console.log(name));
// console.log(os.platform());

fs.readFile("./docs/blogOne.txt", (err, data) => {
  err ? console.log(err) : console.log(data.toString());
});

fs.writeFile("./docs/blogOne.txt", "Hello, world!", () => {
  console.log("File blogOne.txt modified");
});

// DE ADAUGAT SI STREAM MODE PENTRU A CITI SI SCRIE TEXT

console.log("Last line");
