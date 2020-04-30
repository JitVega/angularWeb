import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestidosDeFiestaComponent } from './vestidos-de-fiesta.component';

describe('VestidosDeFiestaComponent', () => {
  let component: VestidosDeFiestaComponent;
  let fixture: ComponentFixture<VestidosDeFiestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestidosDeFiestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestidosDeFiestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
