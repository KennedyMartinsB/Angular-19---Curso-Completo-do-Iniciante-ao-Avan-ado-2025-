import { Component } from '@angular/core';
import { Cliente } from 'src/app/interface/cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  // Criando novo cliente utilizando o metodo estático
  cliente: Cliente = Cliente.newCliente();

  salvarCliente() {
    console.log("Cliente cadastrado com sucesso!!!")
    console.log("Dados do cliente: ", this.cliente)
  }
}
