import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CounterService} from './CounterService';

@Component({
  selector: 'app-counter', template: `
    <div>
      <button id="decrementButton" (click)="decrement()">-</button>
      <span>{{ count }}</span>
      <button id="incrementButton" (click)="increment()">+</button>
    </div>
  `
})
export class CounterComponent implements OnInit {

  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.counterService
      .getInitialCount()
      .subscribe(count => this.count = count);
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }
}
