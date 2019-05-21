import { Component, OnInit } from '@angular/core';
import { Observable, interval, of, concat, noop, from, pipe,  } from 'rxjs';
import{map, tap, filter, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('click',evt =>{
      console.log(evt);

      setTimeout(() =>{
        console.log("finished");

        let counter = 0;

        setInterval(() =>{
          console.log(counter);
          counter++;

        }, 1000);
       
      })
    })
    
 
    
  }

}
