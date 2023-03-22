import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BannerComponent } from './banner/banner.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursesComponent } from './courses/courses.component';
import { ResearchComponent } from './research/research.component';
import { NewsComponent } from './news/news.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { FacultyViewCourseComponent } from './faculty-view-course/faculty-view-course.component';
import { ViewCourseByStudentComponent } from './view-course-by-student/view-course-by-student.component';
import { ViewCourseRequestComponent } from './view-course-request/view-course-request.component';
import { ViewOwnCourseComponent } from './view-own-course/view-own-course.component';
import { ViewStudentRequestComponent } from './view-student-request/view-student-request.component';
import { SignupComponent } from './signup/signup.component';
import { FacultySignupComponent } from './faculty-signup/faculty-signup.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { ImageComponent } from './image/image.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BannerComponent,
    AboutusComponent,
    CoursesComponent,
    ResearchComponent,
    NewsComponent,
    ContactusComponent,
    LoginComponent,
    AdminHomeComponent,
    FacultyHomeComponent,
    StudentHomeComponent,
    ViewFacultyComponent,
    ViewCourseComponent,
    ViewStudentComponent,
    AddCourseComponent,
    DeleteCourseComponent,
    UpdateCourseComponent,
    FacultyViewCourseComponent,
    ViewCourseByStudentComponent,
    ViewCourseRequestComponent,
    ViewOwnCourseComponent,
    ViewStudentRequestComponent,
    SignupComponent,
    FacultySignupComponent,
    StudentSignupComponent,
    ImageComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
