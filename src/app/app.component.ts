import {Component, OnInit} from '@angular/core';
import {StyleUtil} from '../assets/ts/model/util/StyleUtil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'letter-manager';

  ngOnInit() {
    StyleUtil.styleCssInjector('material', document, 'assets/themes/material.css');
  }
}
