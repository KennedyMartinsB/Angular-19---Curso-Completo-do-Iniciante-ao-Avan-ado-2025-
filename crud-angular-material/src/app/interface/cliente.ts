import { v4 as uuid } from 'uuid'

export class Cliente{
  id?: string;
  nome?: string;
  cpf?: string;
  dataNascimento?: string;
  email?: string;

  // Método estático para criação do cliente
  // Cada cliente cadastrado receberá instantâneamente um id
  // cliente.id pega o cliente criado e atribui um id criado pelo UUID
  static newCliente(){
    const cliente = new Cliente();
    cliente.id = uuid();
    return cliente;
  }
}
