import Favorite from "../models/Favorite.js";
import Track from "../models/Track.js";

// Add a track to favorites
export const addFavorite = async (req, res) => {
  try {
    const { trackId } = req.body;
    const userId = req.user.id;

    // Check if already favorited
    const existingFavorite = await Favorite.findOne({ userId, trackId });
    if (existingFavorite) {
      // Return a success response instead of an error
      return res.status(200).json({ message: "Track already in favorites" });
    }

    const newFavorite = new Favorite({ userId, trackId });
    await newFavorite.save();

    res.status(201).json({ message: "Track added to favorites" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all favorites for a user
export const getFavorites = async (req, res) => {
  try {
    const userId = req.user.id;

    const favorites = await Favorite.find({ userId }).populate("trackId");

    const favoriteTracks = favorites.map((fav) => ({
      _id: fav.trackId._id,
      title: fav.trackId.title,
      artist: fav.trackId.artist,
      albumCover: fav.trackId.albumCover,
      audioUrl: fav.trackId.audioUrl,
    }));

    res.json(favoriteTracks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove a track from favorites
export const removeFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const { trackId } = req.params;

    const favorite = await Favorite.findOneAndDelete({ userId, trackId });

    if (!favorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    res.json({ message: "Track removed from favorites" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
