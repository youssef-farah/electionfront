import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CondidatService } from '../../../../services/condidat.service';
import { AddCandidatsComponent } from '../add-candidats/add-candidats.component';
import { Condidat } from '../../../../models/condidat';

@Component({
  selector: 'app-edit-candidats',
  templateUrl: './edit-candidats.component.html',
  styleUrl: './edit-candidats.component.css'
})
export class EditCandidatsComponent implements OnInit{
  candidatForm: FormGroup

  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<AddCandidatsComponent>,private servicecandidat:CondidatService,@Inject(MAT_DIALOG_DATA) private candidat: Condidat) {}

  ngOnInit(): void {
    this.candidatForm = this.fb.group({
      _id: [this.candidat._id],
      nom: [this.candidat.nom, Validators.required],
      prenom: [this.candidat.prenom, Validators.required],
      cin: [this.candidat.cin, [Validators.required, Validators.pattern('[0-9]{8}')]],  
      date_naissance: [this.candidat.date_naissance, Validators.required],
      nb_vote: [this.candidat.nb_vote],
      programe: [this.candidat.programe, Validators.required],
      comments: [this.candidat.comments],
      voters: [this.candidat.voters]

    })
  }

  

  

  onSubmit(): void {
    if (this.candidatForm.valid) {
      console.log(this.candidatForm.value)
     this.servicecandidat.updateCandidat(this.candidat._id,this.candidatForm.value).subscribe(data =>{
        this.dialogRef.close(data)
      })
    } 
  }

}
