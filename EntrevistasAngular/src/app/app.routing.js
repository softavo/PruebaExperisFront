"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var cargar_tiquetes_component_1 = require("./components/cargar-tiquetes/cargar-tiquetes.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'CargarTiquetes', component: cargar_tiquetes_component_1.CargarTiquetesComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
