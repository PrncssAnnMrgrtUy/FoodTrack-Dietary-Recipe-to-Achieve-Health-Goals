import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R10Page } from './r10.page';

describe('R10Page', () => {
  let component: R10Page;
  let fixture: ComponentFixture<R10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
