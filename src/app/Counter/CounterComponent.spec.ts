import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {CounterComponent} from './CounterComponent';
import {of} from 'rxjs';
import {CounterService} from './CounterService';

describe('CounterComponent', () => {

  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;
  let mockCounterService: any;

  beforeEach(async () => {
    mockCounterService = {getInitialCount: jest.fn(() => of(12))}

    await TestBed.configureTestingModule({
      declarations: [], imports: [CounterComponent], providers: [{
        provide: CounterService, useValue: mockCounterService
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

  });

  afterEach(() => {
    jest.clearAllMocks();
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the count passed as an input', fakeAsync(() => {
    fixture.detectChanges();
    component.count = 100;
    fixture.detectChanges();
    const countSpan = compiled.querySelector('span');
    expect(countSpan?.textContent).toBe('100');
  }));

  it('should increment the count when the increment button is clicked', fakeAsync(() => {

    fixture.detectChanges();
    component.count = 1;
    fixture.detectChanges();

    const incrementButton = compiled.querySelector('#incrementButton') as HTMLButtonElement;
    const countSpan = compiled.querySelector('span');
    incrementButton.click();
    fixture.detectChanges();

    expect(countSpan?.textContent).toBe('2');
  }));

  it('should decrement the count when the decrement button is clicked', fakeAsync(() => {

    fixture.detectChanges();
    component.count = 1;
    fixture.detectChanges();

    const incrementButton = compiled.querySelector('#incrementButton') as HTMLButtonElement;
    const countSpan = compiled.querySelector('span');
    incrementButton.click();
    fixture.detectChanges();

    expect(countSpan?.textContent).toBe('2');
  }));

  it('should emit the new count when the count changes after clicking the increment button', () => {
    component.count = 1;

    const countChange = jest.spyOn(component.countChange, 'emit');
    const incrementButton = compiled.querySelector('#incrementButton') as HTMLButtonElement;
    incrementButton.click();
    fixture.detectChanges();

    expect(countChange).toHaveBeenCalledWith(2);
  });

  it('should emit the new count when the count changes after clicking the decrement button', () => {
    component.count = 1;

    const countChange = jest.spyOn(component.countChange, 'emit');

    const decrementButton = compiled.querySelector('#decrementButton') as HTMLButtonElement;
    decrementButton.click();
    fixture.detectChanges();

    expect(countChange).toHaveBeenCalledWith(0);

  })


  it('should instantiate the value of count on init from the service', fakeAsync(() => {
    fixture.detectChanges();
    expect(component.count).toEqual(12);

  }));

});
