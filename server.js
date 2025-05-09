const express = require("express")
const app = express()
const dotenv = require('dotenv')



dotenv.config()

const port = process.env.PORT || 4000 

// Corrected line
app.get("/", (req, res) => {
  res.send('Hello World');
});

// Added a check for the port before listening
if (!port) {
  console.error("Error: PORT environment variable is not defined.");
} else {
  app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))
}