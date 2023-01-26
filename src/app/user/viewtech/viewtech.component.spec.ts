import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtechComponent } from './viewtech.component';

describe('ViewtechComponent', () => {
  let component: ViewtechComponent;
  let fixture: ComponentFixture<ViewtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
