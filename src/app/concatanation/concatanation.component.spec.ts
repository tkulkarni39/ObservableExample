import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatanationComponent } from './concatanation.component';

describe('ConcatanationComponent', () => {
  let component: ConcatanationComponent;
  let fixture: ComponentFixture<ConcatanationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatanationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
