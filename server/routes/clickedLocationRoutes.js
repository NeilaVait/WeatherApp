const express = require('express');
const Keyword = require('../model/searchKeywords');
const router = express.Router();

// add new keywords
router.post('/api/keywords/new', async (req, res) => {
  const newKeywordsData = req.body;
  const newKeywords = new Keyword(req.body);

  try {
    const newKeywordsResult = await newKeywords.save();
    console.log(newKeywordsResult);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
