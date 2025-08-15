import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CounterComponent} from './CounterComponent';

describe('CounterComponent', () => {

  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the count passed as an input', () => {
    component.count = 100;

    fixture.detectChanges();

    const countSpan = compiled.querySelector('span');
    expect(countSpan?.textContent).toBe('100');
  })

  it('should increment the count when the increment button is clicked', () => {
    component.count = 1;

    const incrementButton = compiled.querySelector('#incrementButton') as HTMLButtonElement;
    const countSpan = compiled.querySelector('span');
    incrementButton.click();
    fixture.detectChanges();

    expect(countSpan?.textContent).toBe('2');
  });

  it('should decrement the count when the decrement button is clicked', () => {

    component.count = 1;

    const decrementButton = compiled.querySelector('#decrementButton') as HTMLButtonElement;
    const countSpan = compiled.querySelector('span');
    decrementButton.click();
    fixture.detectChanges();

    expect(countSpan?.textContent).toBe('0');
  });

});
