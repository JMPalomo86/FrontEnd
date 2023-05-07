import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { FormsProductoComponent } from './productos/forms-producto.component';
import { CategoriaComponent } from './productos/categoria.component';

const routes:Routes=[
  {path:'',redirectTo:'/productos',pathMatch:'full'},
  {path:'productos',component:ProductosComponent},
  {path:'productos/form',component:FormsProductoComponent},
  {path:'productos/form/:id',component:FormsProductoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    FormsProductoComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
