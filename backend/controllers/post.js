import postModel from "../models/postModel.js";

export const fechPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    if(!posts){
      res.status(404).json("no posts found")
    }
    res.status(200).json({count: posts.length, posts});
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export const fechPost = async(req, res) => {
    try {
        const {id} = req.params
        const post = await postModel.findById(id)
        if(!post){
          return  res.status(404).json('post not found')
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
  try {
    const {title, creator, tags, message, file, createdAt} = req.body;
    const newPost = await postModel.create({title, creator, tags, message, file, createdAt:new Date().toISOString()
    });
    newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    const updatedPost = await postModel.findByIdAndUpdate(id, post, {new: true});
    if(!updatedPost){
      return res.status(404).json("Post Not Found")
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export const deletePost = async (req, res) => {
    try {
        const {id} = req.params
        const deletedPost = await postModel.findByIdAndDelete(id)
        if(!deletedPost){
          return res.status(404).json("Post Not Found")
        }
        res.status(200).json(deletedPost)
    } catch (error) {
        console.log(error)
    }
}
