import {NgModule} from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [MatGridListModule, MatCardModule, MatToolbarModule],
  exports: [MatGridListModule, MatCardModule, MatToolbarModule],

})

export class MaterialModule {
}
