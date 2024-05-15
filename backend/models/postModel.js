import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  creator: String,
  tag: [String],
  file: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }

});

const postModel = mongoose.model("post", postSchema);
export default postModel;
