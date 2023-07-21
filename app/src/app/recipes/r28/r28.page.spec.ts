import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R28Page } from './r28.page';

describe('R28Page', () => {
  let component: R28Page;
  let fixture: ComponentFixture<R28Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R28Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
