import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  MatDialogRef } from '@angular/material/dialog';
import { CondidatService } from '../../../../services/condidat.service';

@Component({
  selector: 'app-add-candidats',
  templateUrl: './add-candidats.component.html',
  styleUrl: './add-candidats.component.css'
})
export class AddCandidatsComponent implements OnInit{
  candidatForm: FormGroup

  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<AddCandidatsComponent>,private servicecandidat:CondidatService) {}

  ngOnInit(): void {
    this.candidatForm = this.fb.group({
      _id: [],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],  
      date_naissance: ['', Validators.required],
      nb_vote: [0],
      programe: ['', Validators.required],
      comments: [],
      voters: []

    })
  }

  

  

  onSubmit(): void {
    if (this.candidatForm.valid) {
      this.candidatForm.get(["comments"]).setValue([])
      this.candidatForm.get(["voters"]).setValue([])
      console.log(this.candidatForm.value)


     this.servicecandidat.addCandidat(this.candidatForm.value).subscribe(data =>{
        this.dialogRef.close(data)
      })
    } 
  }

}
