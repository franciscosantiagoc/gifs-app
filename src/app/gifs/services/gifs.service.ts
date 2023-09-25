import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private GIPHY_API_KEY:string = import.meta.env.NG_APP_API_KEY;
  private GIPHY_URL:string = 'http://api.giphy.com/v1/gifs/search';
  private LIMIT: number = 50;
  constructor(
    private http: HttpClient
  ) {
    this.loadTagsHistory();
    this.loadLastSearch();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  };

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)) {
     this._tagsHistory = this._tagsHistory.filter( oldtag => oldtag !== tag );
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify( this._tagsHistory))
  }

  private loadTagsHistory(): void {
    let dataStorage = localStorage.getItem('history');
    if( !dataStorage) return;

    this._tagsHistory = JSON.parse(dataStorage);
  }

  private loadLastSearch(): void {
    if(!this._tagsHistory.length) return;

    let lastTagSearched: string = this._tagsHistory.shift()!;
    this.searchTag(lastTagSearched)
  }

  searchTag (tag: string) {
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('q', tag)
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit', this.LIMIT);

    this.http.get<SearchResponse>(`${this.GIPHY_URL}`, { params })
    .subscribe((resp) => {
      this.gifList = resp.data;
    })
  }
}
