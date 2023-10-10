import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "hello";
  data = 9;

  dataValue(){
    return "function data";
  }

  getName(name:string, secondName:string){
     alert(name);
     alert(secondName);

  }
}
