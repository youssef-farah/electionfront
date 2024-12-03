import { Component, OnInit } from '@angular/core'
import { CondidatService } from '../../../services/condidat.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  candidats: any[] = []
  filteredCandidats: any[] = []
  searchText: string = ''

  constructor(private candidatService: CondidatService, private router: Router) {}

  ngOnInit(): void {
    this.candidatService.getCandidats().subscribe(
      (data) => {
        this.candidats = data
        this.filteredCandidats = data
        console.log(this.candidats)
      },
      (error) => {
        console.error('Error fetching candidats:', error)
      }
    )
  }

  filterCandidats(): void {
    const lowerSearchText = this.searchText.toLowerCase() 
    console.log(this.candidats)

    this.filteredCandidats = this.candidats.filter(c => 
      c.nom.toLowerCase().includes(lowerSearchText) 
    )
  }

  check(id: string): void {
    const targetUrl = `/main/liste/${id}`
    console.log('Navigating to:', targetUrl)
    this.router.navigate([targetUrl])
  }
}
