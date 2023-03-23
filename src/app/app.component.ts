import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  //template:"<h1>HelloWorld from Inline Template</h1>",
  styleUrls: ['./app.component.css']
  //styles : [`h1{color:red;}`]
})
export class AppComponent {
  title = 'angular-test';
}
