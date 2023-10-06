import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
  page: number = 1;
  total: number = 100;

  constructor(private gifsServices:GifsService) {}


  pageChanged(page:number): void {
    this.gifsServices.setPage(page);
    this.page = page;
  }

}
