import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName="HOTEL"

  hideRooms:boolean=false;
  hideClass:string="";

  toggle():void{
    new Promise(resolve => setTimeout(resolve, 2000))
    this.hideRooms=!this.hideRooms
    if(this.hideRooms==true){
      this.hideClass="hdi";
    }
    else{
      this.hideClass=""
    }
     
  }
  success():void{
    alert("HelloWorld");
  }
}
