import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubMapComponent } from './club-map.component';

describe('ClubMapComponent', () => {
  let component: ClubMapComponent;
  let fixture: ComponentFixture<ClubMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
