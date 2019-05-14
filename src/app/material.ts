import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule,MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule,MatFormFieldModule],
})

export class MaterialModule { }