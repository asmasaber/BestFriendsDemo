import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/UserComponents/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Components/UserComponents/home/home.component';
import { UserComponent } from './Components/UserComponents/user/user.component';
import { QuestionsComponent } from './Components/QuestionComponents/questions/questions.component';
import { TxtQuestionComponent } from './components/QuestionComponents/txt-question/txt-question.component';
import { McqQuestionComponent } from './components/QuestionComponents/mcq-question/mcq-question.component';
import { TfQuestionComponent } from './components/QuestionComponents/tf-question/tf-question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    QuestionsComponent,
    TxtQuestionComponent,
    McqQuestionComponent,
    TfQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'user', component: UserComponent},
      {path: 'questions/:id', component: QuestionsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
