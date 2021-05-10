import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { MyInfoComponent } from './aboutMe/myInfo/my-info.component';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
   {path:"", component:HomeComponent},
   {path:"aboutMe/myinfo", component:MyInfoComponent} 
];
@NgModule({
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class AppRoutingModule { } export const 
RoutingComponent = [HomeComponent,MyInfoComponent];