import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServicesProvider {

  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
  }

  public login(postParams){
    let body = 'email=' + postParams.email;
    this.headersPost = new Headers({
      'Content-Type':'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin':'*'
    });

    let optionspost = new RequestOptions({
       headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.post('https://api-rest-edward.herokuapp.com/api/signin',body,optionspost)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }
}
