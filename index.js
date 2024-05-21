const express = require("express");
const cors = require("cors");
const imageRoutes = require("./routes/images");
const videoRoutes = require("./routes/videos");
const app = express();

const port = 5050;

// middleware
app.use(express.json()); // parse req.body
app.use(express.static("public"));
app.use(cors());

app.use("/images", imageRoutes);
app.use("/videos", videoRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "BrainFlix API Documentation",
  });
});

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
