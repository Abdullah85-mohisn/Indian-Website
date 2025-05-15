const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    caseNumber: String,
    year: String,
    images: [String] // filenames or URLs
});

module.exports = mongoose.model('Case', caseSchema);
