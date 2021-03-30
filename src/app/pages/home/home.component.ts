import { Component, OnInit } from '@angular/core';
import { YoutobeService } from '../../services/youtobe.service';
import { YouTobeReponse } from '../../models/youTobe.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private youTobeService: YoutobeService) { }

  ngOnInit(): void {

    this.youTobeService.getVideos()
      .subscribe((resp) => {
        console.log(resp);
    });
  }

}
