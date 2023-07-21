import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R27Page } from './r27.page';

describe('R27Page', () => {
  let component: R27Page;
  let fixture: ComponentFixture<R27Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R27Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
