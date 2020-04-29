import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'error',component:ErrorComponent},
  {path:'success',component:SuccessComponent},
  {path:'',redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
