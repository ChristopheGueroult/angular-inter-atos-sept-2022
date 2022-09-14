import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'crm-nov-bis';
  public obs$ = new Observable((subscribers) => {
    subscribers.next(Math.random());
  });
  public subject$ = new Subject<any>();
  public behaviorSubject$ = new BehaviorSubject<any>(Math.random());

  constructor() {
    this.obs$.subscribe((data) => {
      console.log(data);
    });
    this.obs$.subscribe((data) => {
      console.log(data);
    });

    this.subject$.subscribe((data) => {
      console.log(data);
    });
    this.subject$.subscribe((data) => {
      console.log(data);
    });
    this.subject$.next(Math.random());

    this.behaviorSubject$.subscribe((data) => {
      console.log(data);
    });
    this.behaviorSubject$.subscribe((data) => {
      console.log(data);
    });
  }
}
