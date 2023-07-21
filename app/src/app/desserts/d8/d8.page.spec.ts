import { ComponentFixture, TestBed } from '@angular/core/testing';
import { D8Page } from './d8.page';

describe('D8Page', () => {
  let component: D8Page;
  let fixture: ComponentFixture<D8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(D8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
