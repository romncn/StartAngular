import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //twoway binding
  fullName: string = ""
  salary: number = 25000

  //event binding
  myDetails: string = ""
  myKeyUp() {
    console.log(this.myDetails.length);
    
  }
  
  doSave() {
    console.log("hello");
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
