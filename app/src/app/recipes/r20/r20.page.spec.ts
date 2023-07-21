import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R20Page } from './r20.page';

describe('R20Page', () => {
  let component: R20Page;
  let fixture: ComponentFixture<R20Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
