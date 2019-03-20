import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-app',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ]
})
export class FormComponent  {
  nameContent="";
  getName(value: string){
    this.nameContent=value;
  }
  @Output () OutputHandle = new EventEmitter<any>();
  pushContent(){
    this.OutputHandle.emit(this.nameContent)
  }
}
