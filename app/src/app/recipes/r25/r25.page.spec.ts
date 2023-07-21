import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R25Page } from './r25.page';

describe('R25Page', () => {
  let component: R25Page;
  let fixture: ComponentFixture<R25Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
