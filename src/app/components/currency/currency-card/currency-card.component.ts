import { Component, Input } from '@angular/core';
import { Currency } from '../../../interfaces/currency.interface';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.css'
})
export class CurrencyCardComponent {
  @Input() currency!:Currency

  
}
