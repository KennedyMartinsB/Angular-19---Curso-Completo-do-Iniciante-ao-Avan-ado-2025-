import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { LugarService } from 'src/app/lugares/lugar.service';
import { Lugar } from '../../lugares/lugar';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit{
  lugar: Lugar[] = []

  ngOnInit() {
    this.carregarCategorias()
  }

  constructor(private lugarService: LugarService) {}

  carregarCategorias() {
    this.lugarService.obterTodos().subscribe({
      next: (lugares) => {
        console.log('Categorias Recebidas: ', lugares)
        this.lugar = lugares
      },
      error: erro => console.error('Houve um erro ao carregar categorias: ', erro)
    })
  }
}
