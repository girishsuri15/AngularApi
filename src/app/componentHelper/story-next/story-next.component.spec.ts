import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryNextComponent } from './story-next.component';

describe('StoryNextComponent', () => {
  let component: StoryNextComponent;
  let fixture: ComponentFixture<StoryNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
