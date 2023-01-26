import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechregisterComponent } from './techregister.component';

describe('TechregisterComponent', () => {
  let component: TechregisterComponent;
  let fixture: ComponentFixture<TechregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
