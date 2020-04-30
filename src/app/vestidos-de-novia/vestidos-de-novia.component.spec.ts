import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestidosDeNoviaComponent } from './vestidos-de-novia.component';

describe('VestidosDeNoviaComponent', () => {
  let component: VestidosDeNoviaComponent;
  let fixture: ComponentFixture<VestidosDeNoviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestidosDeNoviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestidosDeNoviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
