import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  scrolling$ = new Subject<boolean>();

  constructor() { }

  scrolling(isScrollingDown: boolean): void {
    this.scrolling$.next(isScrollingDown);
  }

  scrollingHandler(): Observable<boolean> {
    return this.scrolling$;
  }
}
