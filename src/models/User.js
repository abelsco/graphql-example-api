import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});

export default mongoose.model("User", Schema);
