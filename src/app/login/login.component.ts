import { Component, OnInit } from '@angular/core';
import { Validators, FormControl,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient,private myServ : HttpServiceService,private router:Router) { }
  
  users;
  ngOnInit(): void {
    
  }
  emailCtrl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  pwdCtrl = new FormControl('', [
    Validators.required
  ]);
  login(){
    var obj:any={};
    obj.email = this.emailCtrl.value;
  obj.pwd = this.pwdCtrl.value;
  this.httpClient.post<any>("http://localhost:3000/login",obj).subscribe(data => {
    if(data && data.length > 0){
      this.users = data;

    }
})
}
register(){
  this.router.navigate(['/home']);
}
displayedColumns = ['name', 'email', 'dob','gender','age'];


}
