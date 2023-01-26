import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhighercourseComponent } from './viewhighercourse.component';

describe('ViewhighercourseComponent', () => {
  let component: ViewhighercourseComponent;
  let fixture: ComponentFixture<ViewhighercourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhighercourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewhighercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
