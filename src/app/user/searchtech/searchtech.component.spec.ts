import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtechComponent } from './searchtech.component';

describe('SearchtechComponent', () => {
  let component: SearchtechComponent;
  let fixture: ComponentFixture<SearchtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
