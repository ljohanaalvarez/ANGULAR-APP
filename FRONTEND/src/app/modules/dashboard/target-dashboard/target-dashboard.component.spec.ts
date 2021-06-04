import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetDashboardComponent } from './target-dashboard.component';

describe('TargetDashboardComponent', () => {
  let component: TargetDashboardComponent;
  let fixture: ComponentFixture<TargetDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
