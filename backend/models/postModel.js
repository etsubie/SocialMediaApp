import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  name: String,
  creator: String,
  message: String,
  tags: [String],
  file: String,
  likes: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: new Date()
  }

});

const postModel = mongoose.model("post", postSchema);
export default postModel;
