import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoRedesComponent } from './logo-redes.component';

describe('LogoRedesComponent', () => {
  let component: LogoRedesComponent;
  let fixture: ComponentFixture<LogoRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoRedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
