import {Component, OnInit} from '@angular/core';
import {StyleUtil} from '../../assets/ts/model/util/StyleUtil';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    StyleUtil.styleCssInjector(document, 'assets/themes/material.css');
  }

}
