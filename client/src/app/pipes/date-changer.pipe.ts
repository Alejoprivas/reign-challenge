import {Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateAgo',
    pure: true
})
export class DateChangerPipe implements PipeTransform {

    transform(value: any, args?: any): any {
      let datePipe = new DatePipe("en-US");
      

        if (value) {
          const day = 86400;
          const moreDays = 172800;
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);

            if (seconds < day) // simple format
                return datePipe.transform(value, 'h:mm a');;

            if (seconds > day  && seconds < moreDays ) // yestarday
                return 'yesterday'; 

            if (seconds > moreDays )
                return datePipe.transform(value, 'MMM dd');;


        }
        return value;
    }

}