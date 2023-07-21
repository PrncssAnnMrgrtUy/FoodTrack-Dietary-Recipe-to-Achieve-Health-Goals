import { ComponentFixture, TestBed } from '@angular/core/testing';
import { R30Page } from './r30.page';

describe('R30Page', () => {
  let component: R30Page;
  let fixture: ComponentFixture<R30Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(R30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
