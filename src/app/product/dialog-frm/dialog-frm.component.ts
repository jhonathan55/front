import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../module/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog-frm',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog-frm.component.html',
  styleUrl: './dialog-frm.component.css',
})
export class DialogFrmComponent implements OnInit, OnDestroy {
  readonly dialogRef = inject(MatDialogRef<DialogFrmComponent>);
  private Subscription: Subscription = new Subscription();
  private _fb = inject(FormBuilder);
  // Inicializar el formulario reactivo con validaciones
   form!: FormGroup; // Definir el formulario reactivo
 
  ngOnInit(): void {
   this.form = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  // Método para cerrar el diálogo y enviar los datos del formulario cuando el usuario hace clic en 'Ok'
  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value); // Cerrar el diálogo y devolver los valores del formulario
    }
  }
  isValidField(field: string): string {
    const validatedField = this.form.get(field);
    return !validatedField?.valid && validatedField?.touched
      ? 'is-invalid'
      : validatedField?.touched
      ? 'is-valid'
      : '';
  }
}
