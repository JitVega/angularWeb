import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestidosDeQuinceComponent } from './vestidos-de-quince.component';

describe('VestidosDeQuinceComponent', () => {
  let component: VestidosDeQuinceComponent;
  let fixture: ComponentFixture<VestidosDeQuinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestidosDeQuinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestidosDeQuinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
