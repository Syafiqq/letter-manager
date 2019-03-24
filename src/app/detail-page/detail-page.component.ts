import {Component, OnInit} from '@angular/core';
import {StyleUtil} from '../../assets/ts/model/util/StyleUtil';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    StyleUtil.styleCssInjector(document, 'assets/themes/bulma.css');
    StyleUtil.styleCssInjector(document, 'assets/themes/material.css');
    document.body.classList.add('has-background-white-ter');
  }

}
