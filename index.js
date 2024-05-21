const express = require("express");
const cors = require("cors");
const videoRoutes = require("./routes/videos");
const app = express();
const path = require('path');
const port = 5050;



// middleware
app.use(express.json()); // parse req.body
app.use(express.static("public"));
app.use(cors());

app.use("/videos", videoRoutes);


app.get("/", (req, res) => {
  const documentationPath = path.resolve(__dirname, './public/documents/apiDocumentation.html');
  res.sendFile(documentationPath);
});


app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
