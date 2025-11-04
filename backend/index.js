const express = require("express");
const cors = require("cors");
const upload = require("./upload");
const app = express();

app.use(cors()); // ✅ Enable CORS

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.post("/upload/file", upload.single("image"), (req, res) => {
  return res.json({
    message: "File uploaded successfully",
    file: req.file
  });
});

app.post("/upload/multiple", upload.array("images", 10), (req, res) => {
  return res.json({
    message: "Files uploaded successfully",
    files: req.files
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
