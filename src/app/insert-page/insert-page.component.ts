import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {StyleUtil} from '../../assets/ts/model/util/StyleUtil';
import * as PDFObject from '../../../node_modules/pdfobject';

@Component({
  selector: 'app-insert-page',
  templateUrl: './insert-page.component.html',
  styleUrls: ['./insert-page.component.scss']
})
export class InsertPageComponent implements OnInit, AfterViewInit {
  support = false;

  @ViewChild('mypdf') div;
  @ViewChild('mypdfsum') divsum;

  constructor() {
  }

  ngOnInit() {
    StyleUtil.styleCssInjector(document, 'assets/themes/bulma.css');
    StyleUtil.styleCssInjector(document, 'assets/themes/material.css');
    document.body.classList.add('has-background-white-ter');
    this.support = PDFObject.supportsPDFs;
  }

  ngAfterViewInit(): void {
    if (this.support) {
      if (this.div != null) {
        PDFObject
          .embed('https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf', this.div.nativeElement);
      }
      if (this.divsum != null) {
        PDFObject
          .embed('https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf', this.divsum.nativeElement);
      }
    }
  }

}
