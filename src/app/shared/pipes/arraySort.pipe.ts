import { Pipe, PipeTransform } from '@angular/core';

// myBooks | sortArray: sort

@Pipe({
  name: "sortArray"
})
export class SortArrayPipe implements PipeTransform {
  transform<T>(array: T[], sortField: string) {
    // array = myBooks
    // sortField = sort ("title" || "author")

    const sortedArr = array.slice().sort((itemA, itemB) => {
      if (itemA[sortField] > itemB[sortField]) return 1;

      if (itemA[sortField] < itemB[sortField]) return -1;

      return 0;
    });

    return sortedArr;
  }
}
