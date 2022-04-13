import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  description: {
    type: String,
    default: "Entrada",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Time", Schema);
