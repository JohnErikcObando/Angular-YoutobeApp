import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YouTobeReponse } from '../models/youTobe.models';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutobeService {

  private youtobe='https://www.googleapis.com/youtube/v3';
  private apikey='AIzaSyCNpTLdK7cw-CbmmNwu99Sanit6D5Xmj_k';
  private playlist='UUuaPTYj15JSkETGnEseaFFg';
  private nextPagetoken='';

  constructor( private http: HttpClient ) { }

  getVideos(){

    const url =`${this.youtobe}/playlistItems`

    const params = new HttpParams()
      .set('part','snippet')
      .set('key','AIzaSyCNpTLdK7cw-CbmmNwu99Sanit6D5Xmj_k')
      .set('maxResults','10')
      .set('playlistId','UUuaPTYj15JSkETGnEseaFFg')
      .set('pageToken',this.nextPagetoken)

    return this.http.get<YouTobeReponse>(url, { params})
      .pipe(
         map(resp =>{
           this.nextPagetoken = resp.nextPageToken;
           return resp.items;
         }),
         map(item => item.map( video => video.snippet))
      )
  }

}
