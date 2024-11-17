import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCandidatsComponent } from './edit-candidats.component';

describe('EditCandidatsComponent', () => {
  let component: EditCandidatsComponent;
  let fixture: ComponentFixture<EditCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCandidatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
