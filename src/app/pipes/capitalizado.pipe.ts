import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {

        value = value.toLowerCase();
        console.log(value);
        let nombres = value.split(" "); //separamos el contenido entre cada espacio
        console.log(nombres);

        if (todas) {
            for (let i in nombres) {
                //nombre = primera letra mayuscula + segunda letra en adelante
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        }else{
            //solo la primera palabra
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }




        return nombres.join(" "); //junta los nombres 
    }
}