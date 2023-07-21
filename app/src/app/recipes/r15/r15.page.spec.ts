import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R15Page } from './r15.page';

describe('R15Page', () => {
  let component: R15Page;
  let fixture: ComponentFixture<R15Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
