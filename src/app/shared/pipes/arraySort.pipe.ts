import { Pipe, PipeTransform } from '@angular/core';

// myBooks | sortArray: sort

@Pipe({
  name: 'sortArray',
})
export class SortArrayPipe implements PipeTransform {
  transform<T>(array: T[], sortField: string) {
    // array = myBooks
    // sortField = sort ("title" || "author")

    const sortedArr = array.slice().sort((itemA, itemB) => {
      // This is so we compare the lowercase characters if the item is a string
      const a = itemA[sortField]?.toLowerCase();
      const b = itemB[sortField]?.toLowerCase();

      if (a > b) return 1;

      if (a < b) return -1;

      return 0;
    });

    console.log('sortedArr:', sortedArr);

    return sortedArr;
  }
}
