import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';

import { SelectItem } from '../../models/select-item.model';

@Component({
  selector: 'zp-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectComponent,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input()
  states!: SelectItem[];
  @Input()
  title!: string;
  @Input() widthSize: number = 41;
  @Input() size = 'large';
  @Input() hasError = false;

  @Input() toastrText: string ='';

  @Input() set defaultValue(value: string | number) {
    this.itemControl.setValue(value);
  }
  @Input() showBorder = true;
  @Input() disabled = false;
  @Input() placeholder: string='';
  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();

  itemControl = new FormControl('');
  touched = false;

  constructor(private _toastr: ToastrService) {}

  selectValue(data: MatSelectChange): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this.itemSelected.emit(data.value);
    this.onChange(data.value);
  }

  onChange = (chosen: any) => {};
  onTouched = () => {};

  writeValue(obj: string): void {
    this.defaultValue = obj;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  throwToastr(state: boolean) {
    if (state && this.toastrText) {
      this._toastr.info(this.toastrText);
    }
  }
}
