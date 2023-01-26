import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplytechComponent } from './applytech.component';

describe('ApplytechComponent', () => {
  let component: ApplytechComponent;
  let fixture: ComponentFixture<ApplytechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplytechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplytechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
