import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryfeedComponent } from './storyfeed.component';

describe('StoryfeedComponent', () => {
  let component: StoryfeedComponent;
  let fixture: ComponentFixture<StoryfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
