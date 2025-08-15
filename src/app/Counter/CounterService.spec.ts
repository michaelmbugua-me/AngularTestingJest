import {CounterService} from './CounterService';

describe('CounterService', () => {

  let counterService: CounterService;

  beforeEach(() => {
    counterService = new CounterService();
  });


  it('should return a value of 15 when the getInitialCount function is called', () => {
    counterService.getInitialCount().subscribe(count => {
      expect(count).toBe(15);
    });
  });

});
