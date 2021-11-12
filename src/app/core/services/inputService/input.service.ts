import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  inputValue = new BehaviorSubject<string>('');

  constructor() { }

  getInputValue():BehaviorSubject<string>{
    return this.inputValue;
  }

  setInputValue(value: string):void{
    this.inputValue.next(value);
  }
}
