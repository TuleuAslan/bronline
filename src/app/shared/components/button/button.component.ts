import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'zp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() icon: string='';
  @Input()
  set btnType(btnType: string) {
    this._btnType = btnType;
  }
  get btnType(): string {
    return `btn-${this._btnType}`;
  }
  @Input() isDisabled = false;
  @Input() widthSize: number = 40;
  @Input() heightSize = 40;
  @Output() buttonClicked = new EventEmitter<void>();
  private _btnType = 'primary';
  constructor() {}

  ngOnInit(): void {}
}
