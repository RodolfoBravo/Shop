import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagMainComponent } from './pag-main.component';

describe('PagMainComponent', () => {
  let component: PagMainComponent;
  let fixture: ComponentFixture<PagMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
