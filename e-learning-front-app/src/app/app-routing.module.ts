import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BannerComponent } from './banner/banner.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { FacultySignupComponent } from './faculty-signup/faculty-signup.component';
import { FacultyViewCourseComponent } from './faculty-view-course/faculty-view-course.component';
import { ImageComponent } from './image/image.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ResearchComponent } from './research/research.component';
import { SignupComponent } from './signup/signup.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ViewCourseByStudentComponent } from './view-course-by-student/view-course-by-student.component';
import { ViewCourseRequestComponent } from './view-course-request/view-course-request.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { ViewOwnCourseComponent } from './view-own-course/view-own-course.component';
import { ViewStudentRequestComponent } from './view-student-request/view-student-request.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path:"",component:LandingComponent,children:[
    {path:"",component:BannerComponent},
    {path:"login",component:LoginComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"courses",component:CoursesComponent},
    {path:"research",component:ResearchComponent},
    {path:"news",component:NewsComponent},
    {path:"contactus",component:ContactusComponent},
    {path:"SignUp",component:SignupComponent},
    {path:"FacultySignUp",component:FacultySignupComponent},
    {path:"StudentSignUp",component:StudentSignupComponent},
    {path:"adminHome",component:AdminHomeComponent,children:[
      {path:"",component:ImageComponent} , 
      {path:"viewFaculty",component:ViewFacultyComponent},
      {path:"viewStudent",component:ViewStudentComponent},
      {path:"viewCourse",component:ViewCourseComponent},
      {path:"addCourse",component:AddCourseComponent},
      {path:"changePassword",component:ChangepasswordComponent}
    ]},
    {path:"studentHome",component:StudentHomeComponent,children:[
      {path:"",component:ImageComponent} ,
      {path:"viewCourseByStudent",component:ViewCourseByStudentComponent},
      {path:"viewCourseRequest",component:ViewCourseRequestComponent},
      {path:"viewOwnCourse",component:ViewOwnCourseComponent},
      {path:"changePassword",component:ChangepasswordComponent}
    ]},
    {path:"facultyHome",component:FacultyHomeComponent,children:[
      {path:"",component:ImageComponent} ,
      {path:"facultyViewCourse",component:FacultyViewCourseComponent},
      {path:"updateCourse",component:UpdateCourseComponent},
      {path:"viewStudentRequest",component:ViewStudentRequestComponent},
      {path:"changePassword",component:ChangepasswordComponent}
    ]},
    {path:"logout",component:LoginComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
