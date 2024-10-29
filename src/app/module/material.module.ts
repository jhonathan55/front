import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//reactive form module
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
  // Material module
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatButtonModule } from '@angular/material/button';
  import { MatSidenavModule } from '@angular/material/sidenav';
  import { MatListModule } from '@angular/material/list';
  import { MatIconModule } from '@angular/material/icon';
  import {MatDialogModule} from '@angular/material/dialog';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatInputModule} from '@angular/material/input';
  import {MatSnackBarModule} from '@angular/material/snack-bar';
  const MATERIAL_MODULES=[
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
   MatDialogModule,
   MatInputModule,
   MatSnackBarModule

  ]
@NgModule({
  declarations: [],
  imports: [
    MATERIAL_MODULES,
    CommonModule
  ],
  exports: [
    MATERIAL_MODULES
  ] 
})
export class MaterialModule { }
