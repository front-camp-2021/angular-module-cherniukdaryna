import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/services/inputService/input.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  value: string = '';

  constructor(private inputService: InputService) { }

  ngOnInit(): void {
  }

  setValue(): void {
    this.inputService.setInputValue(this.value.toLowerCase());
  }

}
