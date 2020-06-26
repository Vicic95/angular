import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(product: Product[], searchText: string): Product[] {

    if (!product) {
      return [];
    }
    if (!searchText) {
      return product;
    }
    searchText = searchText.toLocaleLowerCase();

    return product.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
