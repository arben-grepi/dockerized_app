const express = require("express");
const cors = require("cors");
const fs = require("fs"); // Import fs module
const app = express();
const port = 3000;

app.use(cors());

// Single GET method to retrieve all words
app.get("/api", (req, res) => {
  // Corrected route
  const data = fs.readFileSync("./sanakirja.txt", {
    encoding: "utf8",
    flag: "r",
  });
  const lines = data.trim().split(/\r?\n/);

  const dictionary = lines.map((line) => {
    const [s, e] = line.split(" ");
    return { suomi: s, englanti: e };
  });

  res.json(dictionary);
});

app.listen(port, () => {
  console.log("Server listening at port 3000");
});
