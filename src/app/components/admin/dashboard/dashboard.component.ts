import { Component, OnInit } from '@angular/core';
import { CondidatService } from '../../../../services/condidat.service';
import { Condidat } from '../../../../models/condidat';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidatsComponent } from '../add-candidats/add-candidats.component';
import { EditCandidatsComponent } from '../edit-candidats/edit-candidats.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private servicecandidat:CondidatService,public dialog: MatDialog){}
  candidats:Condidat[]=[]
  ngOnInit(): void {
    this.servicecandidat.getCandidats().subscribe(data=>{
      console.log(data)
      this.candidats=data
    })
  }

  openAdd(){
    const dialogRef = this.dialog.open(AddCandidatsComponent, {
      width: '600px',
      height:'600px'
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.candidats.push(res)
      }
    })
  }

  openEdit(c:Condidat){
    const dialogRef = this.dialog.open(EditCandidatsComponent, {
      width: '600px',
      height:'600px',
      data:c
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.candidats= this.candidats.filter(c => c._id != res._id)
        this.candidats.push(res)
      }
    })
  }


  deleteCandidat(c : Condidat ){
    if(confirm("Tu veux supprimer candidat avec cin "+c.cin+" ?")){
      this.servicecandidat.deleteCandidat(c._id).subscribe(data =>{
        console.log(data)
        this.candidats = this.candidats.filter(cand => cand._id != c._id)
      })
    }
  }

}
