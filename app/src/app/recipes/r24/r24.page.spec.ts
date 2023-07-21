import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R24Page } from './r24.page';

describe('R24Page', () => {
  let component: R24Page;
  let fixture: ComponentFixture<R24Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
