import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './pages/profile-info/profile-info.component';

const routes: Routes = [
  {path:'', component:ProfileInfoComponent},
  {path:'app-profile-info', component:ProfileInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
