import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activado: boolean): any {

    let cambio:string = "";

    if(activado){
      for(let x=0 ; x <= value.length ; x++){
        cambio += "*";
      }
    }else{
      cambio = value;
    }

    return cambio;
  }

}
