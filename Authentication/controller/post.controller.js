const express = require("express");

const Post = require("../model/post.model");

const authenticate = require("../middleware/authenticate.js");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", authenticate ,  crudController(Post).post);

router.patch("/:id", authenticate , crudController(Post).updateOne);

router.delete("/:id", authenticate , crudController(Post).deleteOne);

module.exports = router;