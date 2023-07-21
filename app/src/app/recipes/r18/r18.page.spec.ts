import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R18Page } from './r18.page';

describe('R18Page', () => {
  let component: R18Page;
  let fixture: ComponentFixture<R18Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
