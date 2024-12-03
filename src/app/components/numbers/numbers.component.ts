import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CondidatService } from '../../../services/condidat.service';
Chart.register(...registerables);

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent implements OnInit {
  chart: any;
  candidats: any[] = [];
  names: any[] = [];
  votes: any[] = [];

  constructor(private candidatService: CondidatService) {}

  ngOnInit(): void {
    this.candidatService.getCandidats().subscribe(
      (data) => {
        this.candidats = data;
        console.log(this.candidats);  
        
        this.names = this.candidats.map(candidate => candidate.nom);
        this.votes = this.candidats.map(candidate => candidate.nb_vote);
        console.log(this.names);

        const config: any = {
          type: 'bar',
          data: {
            labels: this.names,  
            datasets: [{
              label: 'Nombres de votes',
              data: this.votes, 
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          },
        };

        this.chart = new Chart('Mychart', config);
      },
      (error) => {
        console.error('Error fetching candidats:', error);
      }
    );
  }
}
