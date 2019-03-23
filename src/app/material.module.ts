import {NgModule} from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [MatGridListModule, MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule],
  exports: [MatGridListModule, MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule],
})

export class MaterialModule {
}
