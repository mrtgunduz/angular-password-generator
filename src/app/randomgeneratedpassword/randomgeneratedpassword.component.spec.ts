import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomgeneratedpasswordComponent } from './randomgeneratedpassword.component';

describe('RandomgeneratedpasswordComponent', () => {
  let component: RandomgeneratedpasswordComponent;
  let fixture: ComponentFixture<RandomgeneratedpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomgeneratedpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomgeneratedpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
