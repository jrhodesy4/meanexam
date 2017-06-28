import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-q',
  templateUrl: './new-q.component.html',
  styleUrls: ['./new-q.component.css']
})
export class NewQComponent implements OnInit {
  question =  {content: '', description: ''}
  currentUser = {name: ''}
  errors: any;

  constructor(private _questionservice: QuestionService, private _router: Router) {
    this._questionservice.getCurrentUser()
    	.then((data)=>this.currentUser=data)
    	.catch((data)=>{
        console.log("no user found");
        this._router.navigate(['/'])})
  }

  ngOnInit() {
  }

  addQuestion() {
    this._questionservice.addQuestion(this.question)
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

  goHome() {
    this._router.navigate(['home'])
  }

}
