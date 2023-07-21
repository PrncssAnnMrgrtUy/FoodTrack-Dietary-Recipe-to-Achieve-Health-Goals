import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D9Page } from './d9.page';

describe('D9Page', () => {
  let component: D9Page;
  let fixture: ComponentFixture<D9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
