// importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar los componentes

import { VestidosDeQuinceComponent } from './vestidos-de-quince/vestidos-de-quince.component';
import { VestidosDeFiestaComponent } from './vestidos-de-fiesta/vestidos-de-fiesta.component';
import { VestidosDeNoviaComponent }	 from './vestidos-de-novia/vestidos-de-novia.component';
import { HomeWillmaComponent }		 from './home-willma/home-willma.component';
import { ExternoComponent } 		 from './externo/externo.component';
import { ContactoComponent }		 from './contacto/contacto.component';

//array de rutas

const appRoutes: Routes = [
	{path: '', component: HomeWillmaComponent},
	{path: 'vilma', component: HomeWillmaComponent},
	{path: 'vestidos-de-quince', component: VestidosDeQuinceComponent},
	{path: 'vestidos-de-fiesta' , component: VestidosDeFiestaComponent},
	{path: 'vestidos-de-novia', component: VestidosDeNoviaComponent},
	{path: 'vilma/:nombre', component: HomeWillmaComponent},
	{path: 'vilma/:nombre/:color', component: HomeWillmaComponent},
	{path: 'externo', component: ExternoComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: '**', component: HomeWillmaComponent}
];

//exportar el modulo
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
