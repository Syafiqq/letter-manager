import {Component, OnInit} from '@angular/core';
import {StyleUtil} from '../../assets/ts/model/util/StyleUtil';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    StyleUtil.styleCssInjector('landingpage', document, 'assets/styles/landingpage.css');
  }

}
