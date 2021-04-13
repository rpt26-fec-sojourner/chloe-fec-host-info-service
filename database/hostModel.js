const mongoose = require('mongoose');

let hostSchema = mongoose.Schema({
  listingID: Number,
  hostName: String,
  joinDate: String,
  hostReviewCount: Number,
  superhostFlag: Boolean,
  hostDescription: String,
  stayDescription: String,
  responseRate: String,
  responseTime: String
});