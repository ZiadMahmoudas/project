import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authLogGuard } from './core/guards/auth-log.guard';


const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",loadChildren:()=>import("../app/home/home.module").then(m=> m.HomeModule),canActivate:[authGuard]},
  {path:"Details",component:DetailsComponent,canActivate:[authGuard]},
  {path:"About",component:AboutComponent,canActivate:[authGuard]},
  {path:"login", loadChildren:()=>import("../app/login/login.module").then(m=>m.LoginModule),canActivate:[authLogGuard]},
  {path:"register",loadChildren:()=>import("../app/register/register.module").then(m=>m.RegisterModule)},
  {path:"**",component:NotFoundComponent},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
