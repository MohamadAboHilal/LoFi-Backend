import express from "express";
import { getTracks, createTrack } from "../controllers/trackController.js";

const router = express.Router();

// Public: Get all tracks
router.get("/", getTracks);

router.post("/", createTrack);

export default router;
