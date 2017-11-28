import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  likes = 0;

  dar_like(){
    this.likes += 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
