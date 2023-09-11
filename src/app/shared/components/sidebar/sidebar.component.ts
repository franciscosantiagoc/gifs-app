import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {
  constructor(private gifsServices: GifsService){}

  get tagsHistorySerch() {
    return this.gifsServices.tagsHistory
  }
}
