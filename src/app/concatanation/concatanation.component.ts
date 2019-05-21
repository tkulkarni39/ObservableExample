import { Component, OnInit } from '@angular/core';
import { Observable, interval, of, concat, noop, from, pipe, Subject } from 'rxjs';
import {map, tap, filter, first, last} from 'rxjs/operators'

@Component({
  selector: 'app-concatanation',
  templateUrl: './concatanation.component.html',
  styleUrls: ['./concatanation.component.css']
})
export class ConcatanationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source1$ = of(1,2,3);//Of operator is used for converting variable to observable
    const source2$ = of(4,5,6);
    const source3$ = of(7,8,9);
    
    //from operator is used for converting promise to observable

    const result$ = concat(source1$, source2$, source3$);

    result$.subscribe(val =>console.log(val));

    const filterOddValues = pipe(
      tap(value => console.log('value before mapping: ',value )),
      filter((nos:number) => nos % 2 !== 0),
      map(nos=>nos*nos),
      tap(val => console.log('value after mapping: ',val ))
    );

    const squareOdd = filterOddValues(source3$)

    squareOdd.subscribe(x=>console.log(x))

    const filterFirstValue = result$.pipe(first())

    filterFirstValue.subscribe(val => console.log("first value is ",val))

    const filterLastValue = result$.pipe(last())

    filterLastValue.subscribe(val => console.log("Last value is ", val))
  }

}
