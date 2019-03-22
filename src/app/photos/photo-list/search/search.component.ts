import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'pic-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output()
  onTyping = new EventEmitter<string>();

  @Input()
  value: string = '';

  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe(val => this.onTyping.emit(val));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
