import { Component, Input} from '@angular/core';
//faz com que a propriedade do meu componente, se torne uma especia de atributo html na hora de chamar meu componente, e a partir disso eu passo um valor a ele
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
 
 //@Input()//o valor da propeidade do input componente, agora virou uma especie de atrubuto html, e a partir dele eu posso passar um valor, n tendo um valor fixo na string
 //coloco um valor dinamico a depender do que eu queria
 //label: string ='Alguma coisa'
 
 //@Input()
 //tipo: string ='text'
 
 //@Input()
 //text:string ='Digite algo...'

}
