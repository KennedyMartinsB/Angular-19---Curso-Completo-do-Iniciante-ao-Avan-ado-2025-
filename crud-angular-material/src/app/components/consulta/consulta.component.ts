import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit{

  nameSearch: string = '';
  clientList: Cliente[] = [];
  columnsTable: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'email', 'acoes'];
  deleteMsgSnackBar: MatSnackBar = inject(MatSnackBar)
  // delete: boolean = false;

  constructor(private clientService: ClienteService, private router: Router){ }

  ngOnInit(): void {
    // console.log("Passando pelo OnInit")
    this.clientList = this.clientService.searchClient('');
  }

  research() {
   this.clientList = this.clientService.searchClient(this.nameSearch)
  }

  prepareToEdit(id: string) {
    // Fazendo a troca de pagina e passando o id da consulta para o formulário
    console.log("Id recebido: ", id)
    this.router.navigate(['/cadastro'],{queryParams: {"id": id}} )
  }

  prepareDelete(cliente: Cliente) {
    cliente.delete = true;
  }

  deleteClient(cliente: Cliente) {
    this.clientService.delete(cliente);
    this.clientList = this.clientService.searchClient('');
    this.showDeleteSnackbar("Deletado com sucesso!!!")
    // this.delete = false;
  }

  showDeleteSnackbar(msg: string) {
    this.deleteMsgSnackBar.open(msg, "Ok")
  }
}
