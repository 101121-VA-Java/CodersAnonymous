import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaptchaLoginComponent } from './recaptcha-login.component';

describe('RecaptchaLoginComponent', () => {
  let component: RecaptchaLoginComponent;
  let fixture: ComponentFixture<RecaptchaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecaptchaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaptchaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
