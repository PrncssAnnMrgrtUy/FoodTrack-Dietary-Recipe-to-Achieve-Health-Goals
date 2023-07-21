import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R29Page } from './r29.page';

describe('R29Page', () => {
  let component: R29Page;
  let fixture: ComponentFixture<R29Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R29Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
