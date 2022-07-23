import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private api:ApiService) { 

    api.viewFriend().subscribe(
      (response)=>(
        this.data=response
      )
    )
  }

  data:any=[]

  ngOnInit(): void {
  }

}
