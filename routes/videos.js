const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

function loadVideoData() {
  const videos = JSON.parse(fs.readFileSync("./data/videos.json", "utf8"));
  return videos;
}

// get array of Videos
router.get("/", (req, res) => {
  const videos = loadVideoData();
  res.json(videos);
});

// get a single video using an id
router.get("/:id", (req, res) => {
  const videos = loadVideoData();
  const foundVideo = videos.find((video) => video.id === req.params.id);
  res.json(foundVideo);
});

// post a new videos
router.post("/", (req, res) => {
  // console.log(req.body.name);

  const videos = loadVideoData(); // read json file

  const newVideo = {
    id: uuidv4(),
    title: req.body.title,
    timestamp: Date.now(),
    image: "http://localhost:5050/images/Upload-video-preview.jpg",
    description: req.body.description,
    comments: []
 
  };

  videos.push(newVideo);

  fs.writeFileSync("./data/videos.json", JSON.stringify(videos));

  res.json(videos);
});

module.exports = router;
