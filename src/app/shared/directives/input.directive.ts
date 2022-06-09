import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[brInput]',
})
export class InputDirective implements OnInit, OnChanges {
  @Input() set widthSize(value: number) {
    this.sizeOfWidth = value;
  }

  @Input() set heightSize(value: number) {
    this.sizeOfHeight = value;
  }
  @Input() set state(value: boolean) {
    if (value) {
      this.el.nativeElement.style.border = '1px solid red';
    } else {
      this.el.nativeElement.style.border = '';
    }
  }
  @Output() valueChanged = new EventEmitter<void>();

  el: ElementRef;
  sizeOfWidth = 184;
  sizeOfHeight = 32;
  @HostListener('click') onClick() {
    this.el.nativeElement.style.border = '';
  }

  @HostListener('keyup', ['$event']) public onKeyup(): void {
    this.valueChanged.emit();
  }

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.input) {
      console.log('input changed');
    }
  }

  ngOnInit(): void {
    this.el.nativeElement.style.width = `${this.sizeOfWidth}px`;
    this.el.nativeElement.style.height = `${this.sizeOfHeight}px`;
    this.el.nativeElement.style.outline = 'none';
    if (this.el.nativeElement.disabled) {
      this.el.nativeElement.style.backgroundColor = 'var(--disabled-text)';
    }
  }
}
