import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-pesagem',
  templateUrl: './pesagem.component.html',
  styleUrls: ['./pesagem.component.css']
})
export class PesagemComponent implements OnInit {
  chartData: ChartData | undefined;
  chartOptions: ChartOptions | undefined;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    // Exemplo de dados (substitua com seus próprios dados)
    this.chartData = {
      labels: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01'],
      datasets: [
        {
          label: 'Peso do Animal',
          data: [300, 310, 295, 320],
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
        },
      ],
    };

    this.chartOptions = {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'Datas de Pesagem',
          },
        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Peso (kg)',
          },
        },
      },
    };
  }
}


