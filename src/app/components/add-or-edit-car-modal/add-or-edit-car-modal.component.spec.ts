import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditCarModalComponent } from './add-or-edit-car-modal.component';

describe('AddOrEditCarModalComponent', () => {
  let component: AddOrEditCarModalComponent;
  let fixture: ComponentFixture<AddOrEditCarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditCarModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
