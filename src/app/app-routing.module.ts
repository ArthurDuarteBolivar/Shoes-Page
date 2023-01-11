import { StoreComponent } from './pages/store/store.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: IntroductionComponent, data: { animation: 'initialPage' }},

  {path: "home", component: HomeComponent, data: { animation: 'homePage' }},
  {path: "store", component: StoreComponent, data: { animation: 'storePage' }},
  {path: "**", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
