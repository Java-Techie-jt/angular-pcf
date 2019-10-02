import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, sName: string): any {
    if (sName === "") {
      return value;
    }
    else {
      console.log(value);
      console.log(sName);
      const playersArray: any[] = [];
      for (let i = 0; i < value.length; i++) {
        let teamName: string = value[i].team;
        let name: string = value[i].name;
        if (teamName.startsWith(sName) || name.startsWith(sName)) {
          playersArray.push(value[i]);
        }
      }
      return playersArray;
    }
  }

}
