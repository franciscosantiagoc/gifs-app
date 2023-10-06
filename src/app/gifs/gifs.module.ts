import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchFormComponent,
    CardListComponent,
    GifCardComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class GifsModule { }
