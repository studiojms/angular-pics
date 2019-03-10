import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pic-load-button',
  templateUrl: './load-button.component.html',
})
export class LoadButtonComponent implements OnInit {
  @Input()
  hasData: boolean = false;

  constructor() {}

  ngOnInit() {}
}
