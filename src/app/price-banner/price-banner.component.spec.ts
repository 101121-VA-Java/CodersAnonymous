import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBannerComponent } from './price-banner.component';

describe('PriceBannerComponent', () => {
  let component: PriceBannerComponent;
  let fixture: ComponentFixture<PriceBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
