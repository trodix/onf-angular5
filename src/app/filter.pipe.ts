import { Pipe, PipeTransform } from '@angular/core';
import { resolve6 } from 'dns';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(items: any, keyword: any): any {
  //   if (keyword == undefined) return items;

  //   return items.filter(function (item) {
  //     return item.libelleFrancais.toLowerCase().includes(keyword.toLowerCase());
  //   });
  // }

  transform(items: any, keyword: any): any {
    if (keyword == undefined) return items;
    let res = [];
    return items.filter(function (item) {
      if (item.libelleFrancais.toLowerCase().includes(keyword.toLowerCase())
        || item.libelleGenre.toLowerCase().includes(keyword.toLowerCase())
        || item.libelleEspece.toLowerCase().includes(keyword.toLowerCase())
        || item.commune.toLowerCase().includes(keyword.toLowerCase())) {
        return item;
      }
    });
  }



}
