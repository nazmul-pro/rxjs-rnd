import { Component, OnInit } from '@angular/core';
import * as Rx from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items = [];
  error = null;
  complete = null;

  ngOnInit() {
  	// console.log(Rx);
  	let arr = [1,2,3]
  	let set = new Set(['foo', window])
  	let map = new Map([[1, 2], [2, 4], [4, 8]]);
  	let str = "shadhin"







  	

  	// creating Obsl http://reactivex.io/documentation/operators.html#categorized
  	
  	let create = Rx.Observable.create((ob)=> {ob.next(7)});
  	let empty = Rx.Observable.empty();
  	let never = Rx.Observable.never();
  	let throwS = Rx.Observable.throw(new Error('Error Creator'));
  	let range = Rx.Observable.range(arr[0], arr[arr.length-1]);
  	let from = Rx.Observable.from(str);
  	let interval = Rx.Observable.interval(1000).take(6).filter(x=> x%2==0);
  	// let just = Rx.Observable.just(str); // not found in Ovsl
  	// let repeat = Rx.Observable.repeat(str);
  	let timer = Rx.Observable.timer(3000, 1000)
				    // .timeInterval()
				    // .pluck('interval') // will show later
				    .take(5);

	arr.push(4)
	// subscription
	this.subscribe(timer)
	
  }






  subscribe(source) { // show subscribe result
  	source.subscribe(
	    (x) => { console.log('Next: ' + x); this.items.push(x) },
	    (err) => { console.log('Error: ' + err); this.error = err;;this.items.push(err)},
	    ()  => { console.log('Completed'); this.complete = 'completed';this.items.push(this.complete)});
  }
}
