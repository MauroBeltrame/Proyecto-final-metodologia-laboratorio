import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Currency } from '../../../interfaces/currency.interface';
import { CommonModule } from '@angular/common';
import { format } from 'date-fns';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.css'
})
export class CurrencyCardComponent implements OnChanges{
  @Input() currency!:Currency
  message:string= "" //Mensaje para el copytoclipboard


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currency'] && this.currency) {
      this.message = `El dólar ${this.currency.nombre} está cotizando a $${this.currency.compra} para la compra y $${this.currency.venta} para la venta. Fecha de la cotización: ${this.calcularFechaActual()}`;
    }
  }
  



  copyToClipboard() {
    navigator.clipboard.writeText(this.message).then(
      () => {
        // Cambiar visualmente el ícono para indicar éxito
        alert('¡Mensaje copiado al portapapeles!'); // Puedes reemplazar esto con una notificación visual más elegante.
      },
      (err) => {
        console.error('Error al copiar al portapapeles: ', err);
      }
    );
  }


  calcularFechaActual(){
    const now=new Date();
    const formattedDate = format(now, "dd/MM/yyyy 'a las' HH:mm:ss")
    return formattedDate;
  }

}
