import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = "Mario";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  porcentaje = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "wolverine",
    edad: 500,
    domicilio: {
      calle: "primera",
      numero: 105
    }
  };

  valorAsync = new Promise( (resolve, reject) => {
    setTimeout( ()=>resolve("LLego la data"), 3500);
  });

  fecha = new Date();

  nombre2 = "marIo alberto gutiErrez mendoza";


  video = "6bfTTeZOrs4";

  activar:boolean = true;
}
