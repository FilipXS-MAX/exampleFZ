import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCardUserComponent } from './detail-card-user.component';

describe('DetailCardUserComponent', () => {
  let component: DetailCardUserComponent;
  let fixture: ComponentFixture<DetailCardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
