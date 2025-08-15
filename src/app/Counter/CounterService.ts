import {Injectable} from '@angular/core';
import {BehaviorSubject, delay, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  getInitialCount(): Observable<number> {
    return of(15).pipe(delay(1000));
  }

}
