import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { LugarService } from 'src/app/lugares/lugar.service';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from 'src/app/categorias/categoria';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit{
  categoriasFiltro: Categoria[] = [];
  lugares: Lugar[] = [];

  ngOnInit() {
    this.carregarCategorias();
    this.carregarLugares();
  }

  constructor(private lugarService: LugarService, private categoriaService: CategoriaService) {}

  carregarCategorias() {
    this.lugarService.obterTodos().subscribe({
      next: (categorias) => {
        console.log('Categorias Recebidas: ', categorias)
        this.categoriasFiltro = categorias
      },
      error: erro => console.error('Houve um erro ao carregar categorias: ', erro)
    })
  }

  carregarLugares() {
    this.lugarService.obterTodos().subscribe({
      next: (lugaresList) => {
        console.log('Lista De Lugares Recebida: ', lugaresList)
        this.lugares = lugaresList
      },
      error: erro => console.error('Houve um erro ao carregar a lista de lugares: ', erro)
    })
  }
}
