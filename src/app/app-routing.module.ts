import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'animals', component: AnimalsComponentComponent},
  { path: 'fruits', component: FruitsComponentComponent},
  { path: '', redirectTo: '/animals', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
