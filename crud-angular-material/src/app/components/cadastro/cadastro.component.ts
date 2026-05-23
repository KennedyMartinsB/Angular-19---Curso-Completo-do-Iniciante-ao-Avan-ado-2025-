import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{

  // Criando novo cliente utilizando o metodo estático
  cliente: Cliente = Cliente.newCliente();
  update: boolean = false;

  constructor(private service: ClienteService, private route: ActivatedRoute){}
  // Propriedade route serve para capturar os dados da rota que foi acessada

  salvarCliente() {
    this.service.saveClient(this.cliente);
    // Cria um novo cliente e consequentemente um novo UUID e limpar o formulário
    this.cliente = Cliente.newCliente();
    // console.log("Cliente cadastrado com sucesso!!!")
    // console.log("Dados do cliente: ", this.cliente)
  }

  ngOnInit() {
    // Capturando id da URL
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params']
      // Pegando o ID da url
      const id = params['id']
      // console.log("Parâmetros: ", params)
      if(id){
        let clientFinded = this.service.getClientById(id);

        if(clientFinded){
          this.update = true
          this.cliente = clientFinded;
        }
        // Caso o id do cliente não exista ele cria um novo
        // this.cliente = this.service.getClientById(id) || Cliente.newCliente();
      }
    })
  }
}
