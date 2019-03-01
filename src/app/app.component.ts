import { Component, OnInit } from '@angular/core';
import * as Rx from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
  	var source = Rx.Observable.range(0, 3);

	var subscription = source.subscribe(
	    function (x) { console.log('Next: ' + x); },
	    function (err) { console.log('Error: ' + err); },
	    function () { console.log('Completed'); });
  }
}
