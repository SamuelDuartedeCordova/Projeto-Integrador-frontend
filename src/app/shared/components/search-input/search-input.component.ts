import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, fromEvent, map, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent implements AfterViewInit, OnDestroy {
  @ViewChild('inputField') inputField!: ElementRef;
  @Output() searchValueChanged = new EventEmitter<string>();
  private unsubscribe$ = new Subject<void>();
  inputValue: string = '';

  ngAfterViewInit() {
    fromEvent(this.inputField.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.unsubscribe$),
        map(() => this.inputValue),
        debounceTime(200)
      )
      .subscribe(value => {
        this.onKeyUp(value);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onKeyUp(searchValue: string): void {
    this.searchValueChanged.emit(searchValue);
  }
}
