import { Component, OnInit } from '@angular/core';
import { Observable, interval, of, concat, noop, from, pipe,  } from 'rxjs';
import{map, tap, filter, throttleTime} from 'rxjs/operators'

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    const interval$ = interval(1000);

    const sub1 =  interval$.subscribe(val => console.log("stream1 =>" +val));
   
    const sub2 =  interval$.subscribe(val => console.log("stream2 =>" +val));
    
    setTimeout(() => sub1.unsubscribe(), 5000);

    setTimeout(() => sub2.unsubscribe(), 8000);
  }

}
