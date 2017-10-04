var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId();
var ProductSchema = new mongoose.Schema({
  "_id" : ObjectId,
  "username" : String,
  "password" : String
});

module.exports = mongoose.model('test', ProductSchema);
