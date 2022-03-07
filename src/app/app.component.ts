import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula.app';
  numero: number = 60
  mensagem:string ='Olá, mundo'
  tipoDoInput: string='password'
  valorInput: string=''
  ValorDei:number = 0
  content: string=''
  
 constructor(//injeção de dependencia 
   private _snackBar: MatSnackBar) 
   {}
   
   Somar_um(event:any):number{
     this.ValorDei ++ 
     
    return this.ValorDei
   }
   Dimunuir_um(event:any):number{
     this.ValorDei --
     return this.ValorDei

   }

   //mostrarSnackBar():void{//metodo que eu usei la no app.component.html para ouvir o evento do botão de clic para mostrar o alert
   //  this._snackBar.open('você clicou nesse botão ;)', 'Fechar')
  // }

  // alterarValor(event: any):void{
  // this.valorInput=event.target.valeu//guardei dentro da variavel o valor que foi digitado dentro da propriedade
   // console.log(event.target.valeu)//o elemento alvo que executou aquele evento, uso quando eu quero ouvir esse valor, a tag input seria o target, o evento alvo que executou aquele evento, e no 'value'que guarda o que o usuario digitou
 //  }//pega os dados do evento, e coloca na função, dentro do angula, na declaração do metodo, a gente coloca o tipo de dados do evento do tipo: any. 
   //Um evento retorna dados para a função
//}queremos fazer com essa prorpiedade apareça na tela usando a interpolação de dados
  }
