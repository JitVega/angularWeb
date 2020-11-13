import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { VestidosDeQuinceComponent } from './vestidos-de-quince/vestidos-de-quince.component';
import { VestidosDeNoviaComponent } from './vestidos-de-novia/vestidos-de-novia.component';
import { VestidosDeFiestaComponent } from './vestidos-de-fiesta/vestidos-de-fiesta.component';
import { HomeWillmaComponent } from './home-willma/home-willma.component';
import { ExternoComponent } from './externo/externo.component';

import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    VestidosDeQuinceComponent,
    VestidosDeNoviaComponent,
    VestidosDeFiestaComponent,
    HomeWillmaComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
