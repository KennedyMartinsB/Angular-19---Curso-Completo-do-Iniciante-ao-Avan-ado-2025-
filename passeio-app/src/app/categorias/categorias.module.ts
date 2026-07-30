import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { ɵInternalFormsSharedModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule
]
})
export class CategoriasModule { }
