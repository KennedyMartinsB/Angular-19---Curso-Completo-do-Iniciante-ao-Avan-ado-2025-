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

  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  ngOnInit() {
    this.carregarCategorias();
    this.carregarLugares();
  }

  constructor(private lugarService: LugarService, private categoriaService: CategoriaService) {}

  carregarCategorias() {
    this.categoriaService.obterTodas().subscribe({
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

  filtrar() {
    // console.log("valores digitados: ", this.nomeFiltro, this.categoriaFiltro)
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro).subscribe({
      next: (resultado) => this.lugares = resultado
    })
  }

  getTotalEstrelas(lugar: Lugar): string {
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734'.repeat(5 - (lugar.avaliacao || 0));
  }
}
