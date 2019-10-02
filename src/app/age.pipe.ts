import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    let currentYear=new Date().getFullYear();//2019
    let birthYear=new Date(value).getFullYear();
    return currentYear-birthYear;
  }

}
