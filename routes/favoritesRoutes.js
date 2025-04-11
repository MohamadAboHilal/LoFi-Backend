import express from "express";
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../controllers/favoriteController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Add a favorite
router.post("/", verifyToken, addFavorite);

// Get user's favorites
router.get("/", verifyToken, getFavorites);

// Remove a favorite
router.delete("/:trackId", verifyToken, removeFavorite);

export default router;
