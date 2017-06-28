import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: object = {name: ""};
  questions: object[] = []

  constructor(private _questionservice: QuestionService, private _router: Router) {
    this._questionservice.getCurrentUser()
    	.then((data)=>this.currentUser=data)
    	.catch((data)=>{
        console.log("no user found");
        this._router.navigate(['/'])})
  }


  ngOnInit() {
    this.getQuestionsFromService();
  }
  getQuestionsFromService() {
    this._questionservice.getQuestions()
    .then((data) => {
      this.questions = data;
    })
    .catch((err) => {console.log(err)})
  }

  newQuestion() {
    this._router.navigate(['newQ'])
  }
  signOut() {
    this._questionservice.logout()
    .then((data)=> this._router.navigate(['/']))
    .catch((data) => this._router.navigate(['/']))

  }

}
