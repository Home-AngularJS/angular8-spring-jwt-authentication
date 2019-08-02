import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright:string;

  constructor() { }

  ngOnInit() {
    this.copyright = '© Copyright 2019. Card Technologies & Systems 2019.';
  }

}
