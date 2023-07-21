import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R16Page } from './r16.page';

describe('R16Page', () => {
  let component: R16Page;
  let fixture: ComponentFixture<R16Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
