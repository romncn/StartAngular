import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //one way binding
labelContact = "Contact"
employee = {  
  name: "Natchanon",
  salary: 24000
}



  constructor() { }

  ngOnInit(): void {
  }

}
