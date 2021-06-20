import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};



@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private handleError: HandleError;

  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HttpServiceService');
   }

  login(obj) : Observable<any>
  {
    console.log(obj);
    let requestObject={'params': obj};
    return this.http.post<any>('http://localhost:3000/login',
    requestObject,{headers:httpOptions.headers})
    .pipe(catchError(this.handleError('login',[])));
  }
}
