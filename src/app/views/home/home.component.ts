import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isTerminalView: boolean;
  isTerminalViewStr: string;

  constructor() {
    this.isTerminalViewStr = 'isTerminalView';
    this.isTerminalView = localStorage.getItem(this.isTerminalViewStr)
      ? localStorage.getItem(this.isTerminalViewStr) === 'true'
      : true;
  }

  ngOnInit(): void {}
}
