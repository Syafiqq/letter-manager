import {Component, OnInit} from '@angular/core';
import {StyleUtil} from '../../assets/ts/model/util/StyleUtil';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  hide = {
    password: true,
    confirm: true
  };

  constructor() {
  }

  ngOnInit() {
    StyleUtil.styleCssInjector(document, 'assets/themes/bulma.css');
    StyleUtil.styleCssInjector(document, 'assets/themes/material.css');
  }

}
