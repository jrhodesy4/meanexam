var mongoose = require('mongoose');

var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var Like = mongoose.model('Like');


module.exports = {
  loginReg: (req, res) => {
    User.findOne({name: req.body.name}, (err, user) =>{
      if(user == null) {
        var newUser = new User(req.body);
        newUser.save((err,savedUser) => {
          if (err) {
            console.log(err);
            return res.sendStatus(500);
          } else {
            req.session.user = savedUser
            return res.json(savedUser);
          }
        })
      } else{
        req.session.user = user;
        return res.json(user)
      }
    })
  },
  getUser: (req,res) => {
    User.findOne({_id: req.session.user._id}, function(err, current_user){
  		res.json(current_user);
  	})
  },
  logout: (req,res) => {
    req.session.destroy()
    res.json({message:"logged out"})
  },
  getQuestions: (req,res) => {
    Question.find({}).populate('_user').populate({path: 'answers'}).exec((err, questions) => {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      } else{
        console.log(questions);
        return res.json(questions);
      }
    })

  },
  addQuestion: (req,res) => {
    var question = new Question(req.body);
      question._user = req.session.user._id
      question.save((err, newQuestion) => {
        if(err) {
          let errors = ''
        for(let i in err.errors){
          errors += err.errors[i].message
        }
        return res.sendStatus(500).send("Couldn't save the Question")
        } else {
          res.json(newQuestion);
        }
      })
  },
  show: (req,res) => {
    Question.findOne({_id: req.params.id}).populate({path: 'answers', populate: {path: '_user'}}).exec((err, myQuestion) => {
      if(err){
        console.log("something went wrong")
      } else {
        return res.json(myQuestion)

      }
    })
  },
  addAnswer: (req,res) => {
    Question.findOne({_id: req.body._question},(err,question) => {
      if(err){
        let errors = ''
      for(let i in err.errors){
        errors += err.errors[i].message
      }
      return res.sendStatus(500).send("Couldn't save the Answer")
      } else {
        console.log(question);
        let answer = new Answer(req.body);
        answer._user = req.session.user._id;
        answer.save((err) => {
          if(err) {
            console.log(err);
            return;
          } else {
            console.log(question);
            question.answers.push(answer._id);
            question.save((err,savedAnswer) => {
              if (err){
                console.log(err);
                return;
              }
              return res.json(savedAnswer)
            })
          }
        })
      }
    })
  },
  addLike: (req,res) => {
    Answer.findOne({_id: req.body._answer},(err,answer) => {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      } else {
        console.log(answer);
        let like = new Like(req.body);
        like.save((err) => {
          if(err) {
            console.log(err);
            return;
          } else {
            console.log(answer);
            answer._likes.push(like._id);
            answer.save((err,savedLike) => {
              if (err){
                console.log(err);
                return;
              }
              return res.json(savedLike)
            })
          }
        })
      }
    })

  }






}
