import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/categorias/categoria';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.scss']
})
export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categoria: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private service: LugarService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => this.categoria = listaCategorias,
      error: erro => console.error('Houve um erro ao carregar as categorias: ', erro)
    })
    // this.listarLugares();
  }

  salvar() {
    this.camposForm.markAllAsTouched();
    // console.log("Valores: ", this.camposForm.value)
    if(this.camposForm.valid){
      this.service.salvar(this.camposForm.value).subscribe({
        next: (lugar) => {
          console.log('Lugar Cadastrado Com Sucesso!!! ', lugar)
          this.camposForm.reset();
        },
        error: erro => console.error('Houve um erro ao salvar o lugar: ', erro)
      })
    }
  }

  listarLugares() {
    this.service.obterTodos().subscribe({
      next: (data) => console.log('Array de lugares: ', data),
      error: erro => console.error('Houve um erro ao listar lugares: ', erro)
    })
  }

  isCampoInvalido(nomeCampo: string) : boolean{
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }
}


// nome?: string;
//   categoria?: string;
//   localização?: string;
//   urlFoto?: string;
//   avaliacao?: number;
