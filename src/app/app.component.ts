import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = "";
  phoneNo ="";
  getNameFromChild(value:any){
    this.name= value.nameContent;
    this.phoneNo=value.phoneNumber
  }

}
