const fs = require("fs");
//first
let data = "Hello Node.";
fs.writeFile("welcom.txt", data, (err) => {
  if (err) console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("welcom.txt", "utf8"));
  }
});

//second
let data1 = data.substring(6, 10);
fs.readFile("welcom.txt", (err, data) => {
  if (err) throw err;

  console.log(`read from welcom.txt : ${data1}`);
});
