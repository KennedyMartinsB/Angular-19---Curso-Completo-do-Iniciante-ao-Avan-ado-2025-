import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrasilApiService } from '../../service/brasil-api.service';
import { Estado, Municipio } from 'src/app/interface/brasil-api/brasilapi.models';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{

  // Criando novo cliente utilizando o metodo estático
  cliente: Cliente = Cliente.newCliente();
  update: boolean = false;
  snackBar: MatSnackBar = inject(MatSnackBar)
  states: Estado[] = [];
  municipality: Municipio[] = [];

  constructor(private service: ClienteService, private route: ActivatedRoute, private router: Router, private BrasilApiService: BrasilApiService){}
  // Propriedade route serve para capturar os dados da rota que foi acessada

  salvarCliente() {
    if(!this.update){
      this.service.saveClient(this.cliente);
      // Cria um novo cliente e consequentemente um novo UUID e limpar o formulário
      this.cliente = Cliente.newCliente();
      this.showMessage("Salvo com sucesso!!!")
      // console.log("Cliente cadastrado com sucesso!!!")
      // console.log("Dados do cliente: ", this.cliente)
    } else{
      this.service.toUpdateClient(this.cliente)
      this.showMessage("Atualizado com sucesso!!!")
      this.router.navigate(['/consulta'])
    }

  }

  showMessage(msg: string) {
    this.snackBar.open(msg, "Ok")
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
    this.loadUfs();
  }

  loadUfs() {
    return this.BrasilApiService.getUfs().subscribe({
      next: listStates => this.states = listStates,
      // next: listStates => console.log("Lista de estados ", listStates),
      error: erro => console.log("Ocorreu um erro ", erro)
    })
  }
}
