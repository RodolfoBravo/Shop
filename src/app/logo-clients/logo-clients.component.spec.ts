import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoClientsComponent } from './logo-clients.component';

describe('LogoClientsComponent', () => {
  let component: LogoClientsComponent;
  let fixture: ComponentFixture<LogoClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
