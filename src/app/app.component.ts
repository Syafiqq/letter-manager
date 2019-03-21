import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'letter-manager';

  ngOnInit() {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = 'cssId';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/themes/material.css';
    link.media = 'all';
    head.appendChild(link);
  }
}
