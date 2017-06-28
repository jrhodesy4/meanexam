import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }

  login(newUser){
  	console.log(newUser);
  	return this._http.post('/api/login', newUser).map(response=>response.json()).toPromise();
  }
  getCurrentUser(){
  	return this._http.get('/api/current_user').map(response=>response.json()).toPromise()
  }
  logout(){
    return this._http.get('/api/logout').map(response=>response.json()).toPromise();
  }
  getQuestions() {
    return this._http.get('/api/questions').map(response=>response.json()).toPromise()
  }
  addQuestion(newQuestion) {
    return this._http.post('/api/questions', newQuestion).map(response=>response.json()).toPromise();

  }
  getQuestion(questionId) {
    return this._http.get('/api/questions/'+questionId).map(response=>response.json()).toPromise();
  }
  addAnswer(newAnswer) {
    return this._http.post('/api/answers', newAnswer).map(response=>response.json()).toPromise();
  }
  addLike(newLike) {
    return this._http.post('/api/likes', newLike).map(response=>response.json()).toPromise();
  }

}
