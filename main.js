const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.json({msg:"Hello World!"});
});

app.listen(port, () => {
  console.log(`hi rajesh the app is running at http://localhost:${port}`);
})