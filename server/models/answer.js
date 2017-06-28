var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AnswerSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
  text: {type: String, minlength: 5},
  details: {type: String},
  _likes: [{type: Schema.Types.ObjectId, ref: 'Like'}]
}, {timestamps: true });

mongoose.model('Answer', AnswerSchema);
