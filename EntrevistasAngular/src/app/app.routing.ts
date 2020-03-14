import{ ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CrearEntrevistasComponent } from './components/crear-entrevistas/crear-entrevistas.component';

const appRoutes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'CrearEntrevistas',component: CrearEntrevistasComponent},
    {path: '**',component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);