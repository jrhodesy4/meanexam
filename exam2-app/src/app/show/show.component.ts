import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  question = {}
  currentUser = {name: ''}
  like = {count: 1}
  disabled = false
  
  constructor(private _router: Router, private _route: ActivatedRoute, private _questionservice: QuestionService) {
    this._questionservice.getCurrentUser()
    	.then((data)=>this.currentUser=data)
    	.catch((data)=>{
        console.log("no user found");
        this._router.navigate(['/'])})
    this._route.params.subscribe((param) => {
      this._questionservice.getQuestion(param.id)
      .then((data) => {
        this.question = data

      })
      .catch((err) => {
        if (err.status == 401) {
          this._router.navigate(['/'])
        }
      })
    })

  }

  ngOnInit() {
  }
  signOut() {
    this._questionservice.logout()
    .then((data)=> this._router.navigate(['/']))
    .catch((data) => this._router.navigate(['/']))

  }
  answerLiked(data) {
    var newObj = {count: this.like.count, _answer: data}
    this._questionservice.addLike(newObj)
    .then(data=> {
      this._route.params.subscribe((param) => {
        this._questionservice.getQuestion(param.id)
        .then((data) => {
          this.question = data

        })
        .catch((err) => {
          if (err.status == 401) {
            this._router.navigate(['/'])
          }
        })
      })
    })
    .catch(err=> {console.log(err)})



  }

}
