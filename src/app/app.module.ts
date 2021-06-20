import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule,MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import { UsersComponent } from './users/users.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,
    AppRoutingModule,MatChipsModule,MatSnackBarModule,MatCardModule,MatToolbarModule,
    BrowserAnimationsModule,MatGridListModule,ReactiveFormsModule,MatButtonModule,MatTableModule,
    MatFormFieldModule,MatInputModule,FormsModule,HttpClientModule,MatStepperModule
  ],
  providers: [HttpErrorHandler,MessageService,MatDatepickerModule,MatDatepickerModule,{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
