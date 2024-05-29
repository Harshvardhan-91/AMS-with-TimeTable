const express = require("express");
const { findAllPapers, findPaper, updatePaper } = require("../controller/papers");
const fileUploadMiddleware = require("../controller/uploadFileMiddleWare");
const uploadPaper = require("../controller/uploadFile");
const reupload = require("../controller/reupload");
const router = express.Router();
const path = require('path');

router.get("/uploadpaper", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
router.get("/reuploadpaper", (req, res) => {
  res.sendFile(path.join(__dirname, "index2.html"));
});

router.get("/", findAllPapers);
router.get("/:id", findPaper); // To find paper using paperId (not _id)
router.post("/", fileUploadMiddleware, uploadPaper); // upload paper
router.post("/reuploadPaper/:id", fileUploadMiddleware, reupload);
router.patch("/:id", updatePaper); // By _id

module.exports = router;
