import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Condidat } from '../../../models/condidat';
import { CondidatService } from '../../../services/condidat.service';

@Component({
  selector: 'app-details-candidat',
  templateUrl: './details-candidat.component.html',
  styleUrl: './details-candidat.component.css'
})
export class DetailsCandidatComponent implements OnInit {

  candidatId: string | undefined;
  candidat!: Condidat;

  constructor(private route: ActivatedRoute,private ser1 : CondidatService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.candidatId = params.get('id')!;
      console.log("Candidat ID:", this.candidatId);

      
      this.ser1.getCandidat(this.candidatId).subscribe((res)=>{this.candidat=res})
      // Fetch candidate details based on this.candidatId
    });
  }
}
