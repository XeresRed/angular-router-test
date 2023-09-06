import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBComponent } from './slot-b.component';

describe('SlotBComponent', () => {
  let component: SlotBComponent;
  let fixture: ComponentFixture<SlotBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlotBComponent]
    });
    fixture = TestBed.createComponent(SlotBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
