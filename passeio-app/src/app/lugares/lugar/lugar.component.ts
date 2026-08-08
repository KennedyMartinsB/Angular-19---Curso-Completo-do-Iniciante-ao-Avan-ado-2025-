import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/categorias/categoria';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.scss']
})
export class LugarComponent {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categorias: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    })
  }

  salvar() {
    console.log("Valores: ", this.camposForm.value)
  }
}


// nome?: string;
//   categoria?: string;
//   localização?: string;
//   urlFoto?: string;
//   avaliacao?: number;
