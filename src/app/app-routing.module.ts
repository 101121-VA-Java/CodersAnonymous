import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [{
  path: '',
  component: LoginComponent
}, 
{
  path: 'userstats',
  component: UserStatsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }