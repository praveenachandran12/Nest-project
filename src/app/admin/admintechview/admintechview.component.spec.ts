import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintechviewComponent } from './admintechview.component';

describe('AdmintechviewComponent', () => {
  let component: AdmintechviewComponent;
  let fixture: ComponentFixture<AdmintechviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintechviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintechviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
