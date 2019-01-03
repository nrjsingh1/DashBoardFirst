import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material';

import { DashBoardDemoFirstComponent } from './dash-board-demo-first.component';

describe('DashBoardDemoFirstComponent', () => {
  let component: DashBoardDemoFirstComponent;
  let fixture: ComponentFixture<DashBoardDemoFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashBoardDemoFirstComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardDemoFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
