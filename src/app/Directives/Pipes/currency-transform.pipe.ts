import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTransform'
})
export class CurrencyTransformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
