import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotAComponent } from './slot-a.component';

describe('SlotAComponent', () => {
  let component: SlotAComponent;
  let fixture: ComponentFixture<SlotAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlotAComponent]
    });
    fixture = TestBed.createComponent(SlotAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
