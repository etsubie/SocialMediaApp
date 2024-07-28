import postModel from "../models/postModel.js";

export const fechPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    if (!posts) {
      res.status(404).json("no posts found");
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = await postModel.create({
      ...post,
      creator: req.userId,
      createdAt: new Date().toISOString(),
    });
    newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;
    const updatedPost = await postModel.findByIdAndUpdate(
      _id,
      { ...post, _id },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json("Post Not Found");
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await postModel.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json("Post Not Found");
    }
    res.status(200).json(deletedPost);
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.userId) return res.json({ message: "Unauthenticated" });
    const post = await postModel.findById(id);

    const index = post.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const likedPost = await postModel.findByIdAndUpdate(id, post, {
      new: true,
    });
    if (!post) {
      return res.status(404).json("post not found");
    }
    res.status(200).json(likedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};
