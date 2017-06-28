import { Component, OnInit } from '@angular/core';
import { QuestionService } from './../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object = {name: ''};
  errors: string[] = [];

  constructor(private _questionservice: QuestionService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.user);
  	this._questionservice.login(this.user)
  	.then((data)=>{
  		console.log("then")
  		var arr = []

  		if(data.errors){
	  		for(var key in data.errors){
	  			arr.push(data.errors[key].message);
	  			this.errors=arr;
	  		}
  		}else{
  			// route to our success page
  			console.log("rerouting to bids page");
  			this._router.navigate(['/home']);
  		}
  	})
  	.catch((err)=>{
  		console.log(err);
  	})

  }

}
