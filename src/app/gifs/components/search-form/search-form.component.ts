import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-form',
  templateUrl: './search-form.component.html'
})
export class SearchFormComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsServices:GifsService){}

  searchTag(/* newTag: string<-- forma nativa */):void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsServices.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
