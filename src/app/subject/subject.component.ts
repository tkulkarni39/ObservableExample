import { Component, OnInit } from '@angular/core';
import { Observable, interval, of, concat, noop, from, pipe, Subject, AsyncSubject, ReplaySubject, BehaviorSubject } from 'rxjs';
import {map, tap, filter, throttleTime} from 'rxjs/operators'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  //There are thre types of subjects  - behaviour, async and replay
  //Async subject
    //var subject = new AsyncSubject();
    var subject = new ReplaySubject();
    // var subject = new BehaviorSubject(0)
    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.next(5);
   
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(6);
    subject.next(7);
    subject.subscribe({
      next: (v) => console.log('observerC: ' + v)
    })
  
    subject.complete();
  }

}
