const express = require("express");

const Post = require("../../models/post");

const router = express.Router();

router.post("/create", async (req, res, next) => {
  const { title, content, excerpt } = req.body;
  if (!title && !content && !excerpt) {
    res.status(400).json("bad request");
  }
  try {
    const post = new Post({ title, content, excerpt });
    console.log(post);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
