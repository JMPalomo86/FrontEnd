import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle, Producto } from './producto';

import { API_URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class ProductosdetalleService {
  private url:string=`${API_URL}/productodetalle`

  constructor(private http:HttpClient) { }

   //Obtener Categoria
   get(id:number):Observable<Detalle>{

    return  this.http.get<Detalle>(this.url+'/'+id);
  }

}
