import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone'
})
export class TelephonePipe implements PipeTransform {
  transform(status: any): any {
    return 'tel:+91' + status;
  }
}