import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {
  camposForm: FormGroup;

  // Inicializando formulário reativo
  constructor(private service: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })
  }

  salvar() {
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
      // console.log('valores digitados: ', this.camposForm.value)
      this.service.salvar(this.camposForm.value).subscribe({
        next: categoria => {
          console.log('Categoria salva com sucesso!!!', categoria);
          this.camposForm.reset;
        },
        error: erro => console.error('Ocorreu um erro', erro)
      })

    }

    // console.log('Está valido?', this.camposForm.valid)
  }

  isCampoInvalido(nomeCampo: string) : boolean{
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }
}
