import Track from "../models/Track.js";

// Get all tracks
export const getTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new track (for testing or admin use)
export const createTrack = async (req, res) => {
  try {
    const { title, artist, albumCover, audioUrl } = req.body;

    const newTrack = new Track({
      title,
      artist,
      albumCover,
      audioUrl,
    });

    await newTrack.save();
    res.status(201).json(newTrack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
