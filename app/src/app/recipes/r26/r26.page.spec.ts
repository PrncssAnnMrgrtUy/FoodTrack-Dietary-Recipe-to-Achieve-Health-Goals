import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R26Page } from './r26.page';

describe('R26Page', () => {
  let component: R26Page;
  let fixture: ComponentFixture<R26Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R26Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
