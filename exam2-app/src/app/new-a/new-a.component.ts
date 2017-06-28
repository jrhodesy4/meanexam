import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-a',
  templateUrl: './new-a.component.html',
  styleUrls: ['./new-a.component.css']
})
export class NewAComponent implements OnInit {
  question = {}
  currentUser = {name: ''}
  answer = {text: '', details: '', }
  errors: any;

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

  goHome() {
    this._router.navigate(['home'])
  }
  addAnswer(data) {
    var newObj = {text: this.answer.text, details: this.answer.details, _question: data}
    this._questionservice.addAnswer(newObj)
    .then(data=> {
      this._router.navigate(['home']);
    })
    .catch(err=> {console.log(err)})
  }
  signOut() {
    this._questionservice.logout()
    .then((data)=> this._router.navigate(['/']))
    .catch((data) => this._router.navigate(['/']))

  }

}
