var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LikeSchema = new mongoose.Schema({
  _answer: {type: Schema.Types.ObjectId, ref: 'Answer'},
  count: {type: Number}
}, {timestamps: true });

mongoose.model('Like', LikeSchema);
