import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecheditComponent } from './techedit.component';

describe('TecheditComponent', () => {
  let component: TecheditComponent;
  let fixture: ComponentFixture<TecheditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecheditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecheditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
