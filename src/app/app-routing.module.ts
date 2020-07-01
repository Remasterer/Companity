import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WhoWeAreComponent} from './pages/preview-pages/who-we-are/who-we-are.component';


const routes: Routes = [
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: '',   redirectTo: 'who-we-are', pathMatch: 'full' },
  { path: '**', redirectTo: 'who-we-are' },
  { path: '**', redirectTo: 'who-we-are'},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
