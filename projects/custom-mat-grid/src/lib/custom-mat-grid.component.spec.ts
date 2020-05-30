import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMatGridComponent } from './custom-mat-grid.component';

describe('CustomMatGridComponent', () => {
  let component: CustomMatGridComponent;
  let fixture: ComponentFixture<CustomMatGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMatGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
