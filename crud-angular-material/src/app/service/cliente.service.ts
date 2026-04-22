import { Cliente } from 'src/app/interface/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  static REPO_CLIENTES = "_CLIENTES";

  // Interface cliente salvei em uma pasta a parte chamada interface
  // Na aula a interface cliente.ts fica na raiz da pasta cadastro
  saveClient(cliente: Cliente) {
    const storage = this.getStorage()
    //adicionando cliente ao array
    storage.push(cliente)

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage))
    // console.log(cliente)
  }

  searchClient(name: String): Cliente[]{
    return this.getStorage();
  }

  private getStorage(): Cliente[] {
    const repositoryClients = localStorage.getItem(ClienteService.REPO_CLIENTES)

    if(repositoryClients){
      const clientes: Cliente[] = JSON.parse(repositoryClients)
      return clientes
    }

    const clientes: Cliente[] = []
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes))
    return clientes
  }
}
