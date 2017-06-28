var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  content: {type: String, minlength: 10},
  count: {type: Number},
  description: {type: String},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true });

mongoose.model('Question', QuestionSchema);
