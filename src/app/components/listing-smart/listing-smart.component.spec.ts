import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSmartComponent } from './listing-smart.component';

describe('ListingSmartComponent', () => {
  let component: ListingSmartComponent;
  let fixture: ComponentFixture<ListingSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingSmartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
