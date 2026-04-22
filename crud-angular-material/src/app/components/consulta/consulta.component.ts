import { Component } from '@angular/core';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {

  clientList: Cliente[] = [];

  constructor(private clientService: ClienteService){ }

  ngOnInit() {
    this.clientList = this.clientService.searchClient('');
  }

}
