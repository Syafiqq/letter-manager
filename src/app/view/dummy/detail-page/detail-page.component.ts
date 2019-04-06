import {Component, OnInit} from '@angular/core';
import {StyleUtil} from '../../../../assets/ts/model/util/StyleUtil';
import * as PDFObject from '../../../../../node_modules/pdfobject';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  support = false;

  constructor() {

  }

  ngOnInit() {
    StyleUtil.styleCssInjector(document, 'assets/themes/bulma.css');
    StyleUtil.styleCssInjector(document, 'assets/themes/material.css');
    document.body.classList.add('has-background-white-ter');
    this.support = PDFObject.supportsPDFs;
    if (this.support) {
      const container = document.querySelector('#my-pdf');
      PDFObject.embed('https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf', container);
    }
  }

}
