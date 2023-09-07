import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'gifs-search-form',
  templateUrl: './search-form.component.html'
})
export class SearchFormComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag(/* newTag: string<-- forma nativa */):void {
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag})
  }
}
