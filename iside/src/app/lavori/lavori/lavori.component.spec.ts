import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavoriComponent } from './lavori.component';

describe('LavoriComponent', () => {
  let component: LavoriComponent;
  let fixture: ComponentFixture<LavoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavoriComponent]
    });
    fixture = TestBed.createComponent(LavoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
