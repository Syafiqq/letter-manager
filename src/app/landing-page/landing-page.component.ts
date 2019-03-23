import {Component, OnInit} from '@angular/core';
import {StyleUtil} from '../../assets/ts/model/util/StyleUtil';
import {ScriptUtil} from '../../assets/ts/model/util/ScriptUtil';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    StyleUtil.styleCssInjector(document, 'assets/styles/landingpage.css');
    ScriptUtil.scriptJsInjector(document, 'assets/baked/landingpage/vendors/jquery/jquery-3.2.1.min.js');
    setTimeout(() => {
      ScriptUtil.scriptJsInjector(document, 'assets/baked/landingpage/vendors/bootstrap/bootstrap.bundle.min.js');
      ScriptUtil.scriptJsInjector(document, 'assets/baked/landingpage/vendors/owl-carousel/owl.carousel.min.js');
      ScriptUtil.scriptJsInjector(document, 'assets/baked/landingpage/js/main.js');
    }, 1000);
  }

}
