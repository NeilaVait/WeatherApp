const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const keywordsSchema = new Schema({
  keywords: {
    type: String,
    required: true,
  },
});

const Keyword = mongoose.model('keyword', keywordsSchema);

module.exports = Keyword;
