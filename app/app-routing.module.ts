import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{path: 'feedback', component: FeedbackComponent},
{path: 'admin', component: AdminComponent},
{path: 'login', component: LoginComponent},
{path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
