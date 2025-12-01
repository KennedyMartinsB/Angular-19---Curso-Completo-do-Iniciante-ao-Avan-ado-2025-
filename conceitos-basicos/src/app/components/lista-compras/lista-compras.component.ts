import { Component } from '@angular/core';
import { ItemLista } from '../../interface/item-lista';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent {
  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem(){
    // console.log("Item recebido: ", this.item)
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;
    this.lista.push(itemLista);
    this.item = '';


  }

  marcarItem(ItemLista: ItemLista) {
    ItemLista.comprado = !ItemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }
}
