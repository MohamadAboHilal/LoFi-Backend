import mongoose from "mongoose";

const trackSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    albumCover: {
      type: String,
      required: true,
    },
    audioUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Track = mongoose.model("Track", trackSchema);

export default Track;
