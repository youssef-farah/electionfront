import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidatsComponent } from './add-candidats.component';

describe('AddCandidatsComponent', () => {
  let component: AddCandidatsComponent;
  let fixture: ComponentFixture<AddCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCandidatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
