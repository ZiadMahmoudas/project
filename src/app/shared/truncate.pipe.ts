import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string , limit:number,space: string ): unknown {
    if(!value)return '';
    const words = value.split('');

    if (words.length > limit) {
      return words.slice(0, limit).join('') + space;
    }
    return value;
  }

}
