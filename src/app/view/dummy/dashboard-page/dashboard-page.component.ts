import {Component, OnInit} from '@angular/core';
import {StyleUtil} from '../../../../assets/ts/model/util/StyleUtil';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    StyleUtil.styleCssInjector(document, 'assets/themes/bulma.css');
    StyleUtil.styleCssInjector(document, 'assets/themes/material.css');
    document.body.classList.add('has-background-white-ter');
  }

}
