import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {
    transform(value: number, unit: string) {
        if(value && !isNaN(value)) {
            if (unit === 'C') {
                var temperature = (value - 32) /1.8 ;
                return temperature.toFixed(0);
            } else if (unit === 'F'){
                var temperature = (value * 1.8 ) + 32
                return temperature.toFixed(0);
            }
        }
        return;
    }
}
