import { inject, Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private snackBar = inject(MatSnackBar);
  constructor() { }

  show(message: string, action: string = 'Cerrar', duration: number = 3000): void {
    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  showSuccess(message: string): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: message,
      duration: 3000, // Duración en milisegundos
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-success'], // Clase CSS personalizada
    });
  }
}
