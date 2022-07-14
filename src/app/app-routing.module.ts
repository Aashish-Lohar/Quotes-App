import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AuthGuard } from './auth.guard';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:"",component:HomeComponent
    // redirectTo:'/login',pathMatch:'full'
  },
  {path:'create',component:CreateQuoteComponent,canActivate:[AuthGuard]},
  // {path:"user/:id",component:UserComponent},
    {path:'**',component:NotfoundComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }