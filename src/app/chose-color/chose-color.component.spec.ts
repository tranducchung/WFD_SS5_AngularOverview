import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseColorComponent } from './chose-color.component';

describe('ChoseColorComponent', () => {
  let component: ChoseColorComponent;
  let fixture: ComponentFixture<ChoseColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoseColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
