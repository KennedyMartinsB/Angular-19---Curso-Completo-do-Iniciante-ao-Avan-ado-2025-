import { Component } from '@angular/core';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  // Criando novo cliente utilizando o metodo estático
  cliente: Cliente = Cliente.newCliente();

  constructor(private service: ClienteService){}

  salvarCliente() {
    this.service.saveClient(this.cliente);
    // console.log("Cliente cadastrado com sucesso!!!")
    // console.log("Dados do cliente: ", this.cliente)
  }
}
