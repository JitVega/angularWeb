import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

const myModule = [
	MatMenuModule, 
	MatSliderModule,
	MatCheckboxModule,
	MatTabsModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatGridListModule
	];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [myModule]
})
export class MaterialModule { }
