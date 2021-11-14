import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

export class Space {
  constructor(
    public mission_name: any,
    public mission_id: any,
    public manufacturers: any,
    public wikipedia: any,
    public website: any

  ){}
}


@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})
export class SpaceXComponent implements OnInit {

  data:any;
  spacex: Space[];


  linknew = 'https://api.spacexdata.com/v3/missions'

  constructor (private http: HttpClient)
  {

  }


  ngOnInit(): void {
    this.http.get(this.linknew).subscribe((responseData: any) => {
      this.data = responseData;
      this.spacex = responseData;
    })
  }

}
