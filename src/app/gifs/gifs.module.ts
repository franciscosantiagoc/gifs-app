import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchFormComponent,
    CardListComponent,
  ],
  exports: [
    HomePageComponent
  ],  
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
