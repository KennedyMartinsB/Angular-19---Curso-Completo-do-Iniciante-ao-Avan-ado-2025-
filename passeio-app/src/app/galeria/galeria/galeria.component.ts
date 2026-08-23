import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/categorias/categoria';
import { CategoriaService } from 'src/app/categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit{
  categoria: Categoria[] = []

  ngOnInit() {
    this.carregarCategorias()
  }

  constructor(private categoriasService: CategoriaService) {}

  carregarCategorias() {
    this.categoriasService.obterTodas().subscribe({
      next: (categorias) => {
        console.log('Categorias Recebidas: ', categorias)
        this.categoria = categorias
      },
      error: erro => console.error('Houve um erro ao carregar categorias: ', erro)
    })
  }
}
