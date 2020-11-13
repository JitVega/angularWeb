import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWillmaComponent } from './home-willma.component';

describe('HomeWillmaComponent', () => {
  let component: HomeWillmaComponent;
  let fixture: ComponentFixture<HomeWillmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWillmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWillmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});