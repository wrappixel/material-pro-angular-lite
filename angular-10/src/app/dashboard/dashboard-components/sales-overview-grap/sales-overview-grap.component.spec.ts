import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOverviewGrapComponent } from './sales-overview-grap.component';

describe('SalesOverviewGrapComponent', () => {
  let component: SalesOverviewGrapComponent;
  let fixture: ComponentFixture<SalesOverviewGrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOverviewGrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOverviewGrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
