import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculadora',
    pathMatch: 'full'
  },

  {
    path: 'calculadora',
    component: CalculadoraComponent
  },

  {
    path: 'lista',
    component: ListaComprasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
