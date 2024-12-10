import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavoraComponent } from './lavora.component';

describe('LavoraComponent', () => {
  let component: LavoraComponent;
  let fixture: ComponentFixture<LavoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavoraComponent]
    });
    fixture = TestBed.createComponent(LavoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
