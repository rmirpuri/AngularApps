import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-rajiv-component]',
  //selector: '.app-rajiv-component',
  selector: 'app-rajiv-component',
  templateUrl: './rajiv-component.component.html',
  styleUrls: ['./rajiv-component.component.css']
})
export class RajivComponentComponent implements OnInit {

  allowNewServer = false;

  serverCreationStatus = "No server was created";

  constructor() {

    setTimeout(  () => {
      this.allowNewServer = true;
    } , 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created";
  }


  ngOnInit() {
  }

}
