import { Component,OnInit,OnDestroy  } from '@angular/core';
import { VERSION,ViewChild, ElementRef } from '@angular/core';
import { Validators, FormControl,FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private snackBar : MatSnackBar,private httpClient: HttpClient,private router: Router){}
  age:any;
  genders= ["Male","Female"];
  topics ;
    calAge(event){
      if(event.target.value != "" && event.target.value != null && event.target.value != undefined){
        var timeDiff = Math.abs(Date.now() - new Date(event.target.value).getTime());
        this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  
        this.reactiveForm.get('age').setValue(this.age);
  
        //this.reactiveForm.ageCtrl.setValue(this.age);
    }
  
    }
    ngOnInit() {
      return this.httpClient.get<any>('http://localhost:3000/gettopics').subscribe(data => {
      this.topics = data; 
    })
      //this.router.navigate(['home'])
    }
  
    
  
    openSnackBar(message: string) {
      this.snackBar.open(message);
    }
  
    ngOnDestroy():void {
      
  }
  reactiveForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required,Validators.email]),
    dob: new FormControl('', [Validators.required]),
  
    age: new FormControl('', [Validators.required]),
    topics: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  
    about: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required])
  
  })
    selectedFile: File
  
    onFileChange(event) {
      const file = event.target.files[0];
      this.reactiveForm.get('file').setValue(file);
  
      const reader = new FileReader();
      
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
      
        reader.onload = () => {
          this.imageSrc = reader.result as string;
          this.reactiveForm.patchValue({
            fileSource: reader.result
          });
     
        };
     
      }
    }
    imageSrc: string;
    register(){
      if(!this.reactiveForm.get('name').value){
        this.openSnackBar('Name is Mandatory');
        return;
      }
      if(!this.reactiveForm.get('email').value){
        this.openSnackBar('Email is Mandatory');
        return;
      }
      if(!this.reactiveForm.get('dob').value){
        this.openSnackBar('DOB is Mandatory');
        return;
      }
      if(!this.reactiveForm.get('age').value){
        this.openSnackBar('Age is Mandatory');
        return;
      }
      if(!this.reactiveForm.get('topics').value){
        this.openSnackBar('Topics is Mandatory');
        return;
      }
      if(!this.reactiveForm.get('gender').value){
        this.openSnackBar('Gender is Mandatory');
        return;
      }

      if(!this.reactiveForm.get('about').value){
        this.openSnackBar('About Me is Mandatory');
        return;
      }
      if(!this.reactiveForm.get('file').value){
        this.openSnackBar('File is Mandatory');
        return;
      }
      if(!this.reactiveForm.get('pwd').value){
        this.openSnackBar('Password is Mandatory');
        return;
      }

      var fd: any = new FormData();
      fd.append("name", this.reactiveForm.get('name').value);
      fd.append("email", this.reactiveForm.get('email').value);
  
      fd.append("dob", this.reactiveForm.get('dob').value);
      fd.append("age", this.reactiveForm.get('age').value);
  
      fd.append("topics", this.reactiveForm.get('topics').value);
      fd.append("gender", this.reactiveForm.get('gender').value);
  
      fd.append("about", this.reactiveForm.get('about').value);
      fd.append("file", this.reactiveForm.get('file').value);
      fd.append("pwd", this.reactiveForm.get('pwd').value);
  
  
      this.httpClient.post<any>('http://localhost:3000/register', fd).subscribe(data => {
        if(data.error){
          this.openSnackBar(data.error);
        }else{
          (<HTMLFormElement>document.getElementById("regForm")).reset()
          this.openSnackBar('Registered Sucessfully');
        }
      })
      
    }
  login(){
    this.router.navigate(['/login']);
  }

}
