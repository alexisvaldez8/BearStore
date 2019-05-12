import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule],
})

export class MaterialModule { }