const router = require("express").Router();
const { createPost } = require("../controllers/post");
router.post("/create", createPost);
router.get("/api/post/latest");

module.exports = router;
