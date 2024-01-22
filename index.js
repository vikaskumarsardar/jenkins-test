const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello! this is test one" });
});
app.get("/about", (req, res) => {
  res.json({ message: "This is about page" });
});
app.use((req, res)=>{
  res.status(404).json({message: "No routes found"})
})
app.listen(9000, () => console.log("ready at nothing http://localhost:9000"));
