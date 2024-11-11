import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CurrencyListComponent } from './components/currency/currency-list/currency-list.component';
import { CurrencyDetailComponent } from './components/currency/currency-detail/currency-detail.component';
import { ConversionToolComponent } from './components/conversion/conversion-tool/conversion-tool.component';
import { HistoricalGraphComponent } from './components/graph/historical-graph/historical-graph.component';
import { LoginComponent } from './components/user/login/login.component';

export const routes: Routes = [
    { 
        path: '', redirectTo: '/monedas', 
        pathMatch: 'full' 
    },
    { 
        path: 'monedas',
        component: CurrencyListComponent
    },
    { 
        path: 'monedas/:id', 
        component:CurrencyDetailComponent
    },
    { 
        path: 'conversion', 
        component:ConversionToolComponent,
    },
    { 
        path: 'graficos', 
        component:HistoricalGraphComponent
    },
    { 
        path: 'usuario', 
        component:LoginComponent
    },
  ];