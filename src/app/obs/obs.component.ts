import { Component, OnInit } from '@angular/core';
import { Observable, interval, of, concat, noop, from, pipe, Subject } from 'rxjs';
import {map, tap, filter} from 'rxjs/operators'
//import { Subject } from "rxjs/Subject";
//import { create } from 'domain';
//import { noop } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // document.addEventListener('click',evt =>{
    //   console.log(evt);

    //   setTimeout(() =>{
    //     console.log("finished");

    //     let counter = 0;

    //     setInterval(() =>{
    //       console.log(counter);
    //       counter++;

    //     }, 1000);
    //   })
    // })

    // const interval$ = interval(1000);

    // const sub1 =  interval$.subscribe(val => console.log("stream1 =>" +val));

    // const sub2 =  interval$.subscribe(val => console.log("stream2 =>" +val));

    // setTimeout(() => sub1.unsubscribe(), 5000);

    // setTimeout(() => sub2.unsubscribe(), 8000);
    //---------------------------------------------------------------------------------------------------

    // const source1$ = of(1,2,3);
    // const source2$ = of(4,5,6);
    // const source3$ = of(7,8,9);

    // const result$ = concat(source1$, source2$, source3$);

    // result$.subscribe(val =>console.log(val));

    // const filterOddValues = pipe(
    //   filter((nos:number) => nos % 2 !== 0),
    //   map(nos=>nos*nos)
    // );

    // const squareOdd = filterOddValues(source3$)

    // squareOdd.subscribe(x=>console.log(x))

    //---------------------------------------------------------------------------------------------------

    // const http$ = Observable.create(observer =>{
    //   fetch('api/MusicApp/getSongs')
    //     .then(response =>{
    //       return response.json();
    //     })
    //     .then(body =>{
    //       observer.next(body);
    //       observer.complete();

    //     })
    //     .catch(err => {
    //       observer.error(err);
          
    //     })
    // })

  //   const https$ = this.CreateHttpObservable('https://localhost:5001/api/MusicApp/getSongs')

  //   const songs = https$
  //   .pipe(
  //     map(res => Object.values(res['https://localhost:5001/api/MusicApp/getSongs']))
  //   );
  //  }



  //  http$.subscribe({
  //    getSongs => console.log(getSongs),
  //    () =>{},
  //    () =>console.log('completed')
  //  );

  //  CreateHttpObservable(url:string) {
  //   return Observable.create(observer =>{
  //     fetch(url)
  //       .then(response =>{
  //         return response.json();
  //       })
  //       .then(body =>{
  //         observer.next(body);
  //         console.log("completed")
  //         observer.complete();

  //       })
  //       .catch(err => {
  //         observer.error(err);
          
  //       })
  //   })
    
  // const s = new Subject<number>();

  // s.subscribe(
  //   next => console.log('before 1: ', next),
  //   error => console.warn(error),
  //   () => console.log('complete before 1')
  // );

  // s.subscribe(
  //   next => console.log('before 2: ', next),
  //   error => console.warn(error),
  //   () => console.log('complete before 2')
  // );

  // s.next(1);
  // s.next(2);
  // s.next(3);

  // s.subscribe(
  //   next => console.log('after: ', next),
  //   error => console.warn(error),
  //   () => console.log('complete after')
  // );

  // s.next(4);
  // s.complete();
   }



}
