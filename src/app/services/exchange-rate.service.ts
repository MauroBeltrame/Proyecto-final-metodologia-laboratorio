import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../interfaces/currency.interface';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  http=inject(HttpClient)

  private apiKey: string = '007bc47fd6e7740cb8d342eb';  // Tu clave API
  private apiUrl: string = 'https://v6.exchangerate-api.com/v6';  // URL base de la API

  private url2:string="https://dolarapi.com/v1/cotizaciones";

  // Método para obtener las tasas de cambio
  getExchangeRates(): Observable<any> {
    const url = `${this.apiUrl}/${this.apiKey}/latest/USD`;  // Ejemplo para obtener tasas desde USD
    return this.http.get<any>(url);  // Realiza la petición GET
  }

  getDolarRates(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.url2)
  }

  
}
