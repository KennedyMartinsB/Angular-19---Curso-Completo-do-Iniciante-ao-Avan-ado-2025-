import { Component } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado(){
    console.log("chamando método de calcular resultado");
    this.resultado = this.numero1 + this.numero2;
  }

}
