import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zp-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() icon: any;
  @Input() color = '#c2c2c2';

  ngOnInit(): void {}
}
