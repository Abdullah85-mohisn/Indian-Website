const express = require('express');
const router = express.Router();
const Case = require('../models/case');
const connectToDatabase = require('../utils/db');
require('dotenv').config();

// Upload Route (No multer, only image URLs)
router.post('/upload', async (req, res) => {
    console.log("🔵 /upload endpoint hit");

    try {
        console.log("🔍 connectToDatabase type:", typeof connectToDatabase);

        await connectToDatabase();
        console.log("✅ Connected to MongoDB");

        const { caseNumber, year, images } = req.body;

        console.log("📦 Received data:", { caseNumber, year, images });

        if (!caseNumber || !year || !images || !Array.isArray(images)) {
            console.warn("⚠️ Invalid input data:", req.body);
            return res.status(400).json({ error: 'Invalid input data' });
        }

        let existingCase = await Case.findOne({ caseNumber, year });
        console.log("🔍 Case search result:", existingCase ? "Found existing case" : "No existing case");

        if (existingCase) {
            existingCase.images.push(...images);
            await existingCase.save();
            console.log("✅ Images added to existing case");
            return res.status(200).json({ message: 'Images added to existing case' });
        } else {
            const newCase = new Case({ caseNumber, year, images });
            await newCase.save();
            console.log("✅ New case created");
            return res.status(201).json({ message: 'New case created and images uploaded' });
        }

    } catch (err) {
        console.error("❌ Error in /upload route:", err);
        return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
});

// Search Route stays the same
router.get('/search', async (req, res) => {
    try {
        await connectToDatabase();
        const { caseNumber, year } = req.query;

        const foundCase = await Case.findOne({ caseNumber, year });
        if (!foundCase) return res.status(404).json({ error: 'No case found' });

        return res.json({ images: foundCase.images });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error fetching case' });
    }
});

router.get('/all', async (req, res) => {
    try {
        await connectToDatabase();
        const allCases = await Case.find();
        return res.json(allCases);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch cases' });
    }
});

router.post('/delete-image', async (req, res) => {
    const { caseId, imageUrl } = req.body;

    try {
        await connectToDatabase();
        const caseDoc = await Case.findById(caseId);
        if (!caseDoc) return res.status(404).json({ error: 'Case not found' });

        caseDoc.images = caseDoc.images.filter(img => img !== imageUrl);
        await caseDoc.save();

        res.json({ message: 'Image deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error deleting image' });
    }
});

router.delete('/delete-case/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await connectToDatabase();
        await Case.findByIdAndDelete(id);
        res.json({ message: 'Case deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error deleting case' });
    }
});


module.exports = router;
