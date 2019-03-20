import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-app',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ]
})
export class FormComponent  {
  info = {
  nameContent:"",
  phoneNumber:""
  }
  
  getName(value: string){
    this.info.nameContent=value;
  }
  getPhone(value:string){
    this.info.phoneNumber=value;
  }
  @Output () OutputHandle = new EventEmitter<any>();
  pushContent(){
    this.OutputHandle.emit(this.info);
  }
}
