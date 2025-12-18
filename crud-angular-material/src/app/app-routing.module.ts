import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
