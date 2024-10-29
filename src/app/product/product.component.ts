import { Component, inject, OnDestroy } from '@angular/core';
import { MaterialModule } from '../module/material.module';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogFrmComponent } from './dialog-frm/dialog-frm.component';
import { ProductService } from './product.service';
import { Subscription, tap } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatDialogModule,
    MaterialModule,
    // MAT_DIALOG_DATA
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnDestroy {
  readonly dialogRef = inject(MatDialogRef<DialogFrmComponent>, {
    optional: true,
  });
  readonly dialog = inject(MatDialog);
  private _productSvc = inject(ProductService);
  private _toastSvc = inject(ToastService);
  //readonly data = inject<any>(MAT_DIALOG_DATA);
  private _subscription: Subscription = new Subscription();
  constructor() {}
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
  openDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    const dialogRef = this.dialog.open(DialogFrmComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (!result) return;
      this._subscription.add(
        this._productSvc
        .createUser(result)
        .pipe(
          tap((res) => {
            console.log(res);
            this._toastSvc.showSuccess('Usuario creado con éxito');
          })
        )
        .subscribe()
      )
     
    });
  }
}
