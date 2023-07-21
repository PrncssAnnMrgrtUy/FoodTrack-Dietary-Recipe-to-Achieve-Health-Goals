import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R21Page } from './r21.page';

describe('R21Page', () => {
  let component: R21Page;
  let fixture: ComponentFixture<R21Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
