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

    toUpdateClient(cliente: Cliente){
      const storage = this.getStorage();

      storage.forEach(_cliente => {
        if(_cliente.id === cliente.id){
          Object.assign(_cliente, cliente);
        }
      })
      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage))
    }

  searchClient(nameSearch: string): Cliente[]{
    const clients = this.getStorage();
    if(!nameSearch){
      return clients
    }
    return clients.filter(client => client.nome?.indexOf(nameSearch) !== -1)
    // return this.getStorage();
  }

  getClientById(id: string): Cliente | undefined{
    const clientes = this.getStorage();
    // Utilizamos o find para encontrar um item já o filter para retornar um array
    return clientes.find(cliente => cliente.id === id)
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
