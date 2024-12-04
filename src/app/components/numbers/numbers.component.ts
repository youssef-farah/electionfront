import { Component, OnInit } from '@angular/core'
import { Chart, registerables } from 'chart.js'
import { CondidatService } from '../../../services/condidat.service'
Chart.register(...registerables)

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'] 
})
export class NumbersComponent implements OnInit {
  chart: any
  candidats: any[] = []
  names: any[] = []
  pourcentages: any[] = []

  constructor(private candidatService: CondidatService) {}

  ngOnInit(): void {
    this.candidatService.getCandidatsPourcentages().subscribe(
      (data) => {
        this.candidats = data
        console.log(this.candidats)

        this.names = this.candidats.map(candidate => candidate.nom.toLowerCase() .split(' ').map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(' ') )
                this.pourcentages = this.candidats.map(candidate => candidate.percentage)
        console.log(this.names)

        const config: any = {
          type: 'bar',
          data: {
            labels: this.names, 
            datasets: [{
              label: 'Pourcentage',
              data: this.pourcentages, 
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)',
                'rgb(199, 199, 199)',
                'rgb(144, 238, 144)',
                'rgb(135, 206, 235)',
                'rgb(210, 105, 30)'
              ],
              hoverOffset: 4
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true, 
                labels: {
                  generateLabels: (chart) => {
                    const data = chart.data
                    return data.labels.map((label, index) => ({
                      text: label, 
                      fillStyle: data.datasets[0].backgroundColor[index], 
                      hidden: false
                    }))
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  callback: (value: number) => `${value}%`
                }
              }
            }
          }
        }
        

        this.chart = new Chart('Mychart', config)
      },
      (error) => {
        console.error('Error fetching candidats:', error)
      }
    )
  }
}
