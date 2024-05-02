import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados.component'; // Assuming the component is in the same folder

@NgModule({
  declarations: [EstadosComponent],
  imports: [CommonModule],
  exports: [EstadosComponent] // Add EstadosComponent to exports if you want to use it in other modules
})
export class EstadosModule {
  
 }
