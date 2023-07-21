import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R17Page } from './r17.page';

describe('R17Page', () => {
  let component: R17Page;
  let fixture: ComponentFixture<R17Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
