import { Component, inject, OnInit } from '@angular/core';
import { ExchangeRateService } from '../../../services/exchange-rate.service';
import { Currency } from '../../../interfaces/currency.interface';
import { CurrencyCardComponent } from '../currency-card/currency-card.component';
@Component({
  selector: 'app-currency-list',
  standalone: true,
  imports: [CurrencyCardComponent],
  templateUrl: './currency-list.component.html',
  styleUrl: './currency-list.component.css'
})
export class CurrencyListComponent implements OnInit{
  rates: any;  // Aquí almacenamos las tasas de cambio
  error: string | null = null;  // Aquí almacenamos cualquier error
  dolarRates:Currency[]=[];

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    // Llamamos al servicio para obtener las tasas de cambio
    this.exchangeRateService.getExchangeRates().subscribe({
      next: (response) => {
        this.rates = response.conversion_rates;  // Asignamos las tasas a la variable 'rates'
        console.log(this.rates);
      },
      error: (err) => {
        this.error = 'Hubo un error al obtener las tasas de cambio.';
        console.error(err);
      }
    });

    this.exchangeRateService.getDolarRates().subscribe({
      next:(response)=>{
        this.dolarRates=response
        console.log(this.dolarRates);
      }
    })
  }

}
