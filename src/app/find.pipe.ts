import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(elemArr: any, propertyName: string, searchStr: string ): any {
    
    if(elemArr.length === 0 || searchStr.trim().length === 0){
      return elemArr;
    }

    let resultArr = [];
    searchStr = searchStr.toLowerCase();

    for( const elem of elemArr ){
      const str = elem[propertyName].toLowerCase();
      if (str.indexOf(searchStr) != -1){
        resultArr.push(elem);
      }
    }

    return resultArr;
  }

}