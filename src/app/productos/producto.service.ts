import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private url:string=`${API_URL}/productos`
  //private url:string='http://192.168.0.2:8080/api/productos';
  
  constructor(private http:HttpClient) { }

  //Obtener Productos  
  getAll():Observable<Producto>{
  return  this.http.get<Producto>(this.url);
  
  }

 

  //Crear Producto
  /*
  create(producto:Producto):Observable<Producto>{
    console.log('producto a enviar',producto);
    return this.http.post<Producto>(this.url,producto);
  }
*/

  create(producto:Producto):Observable<Producto>{
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(producto);
    console.log('producto a crear',body);
    return this.http.post<Producto>(this.url, body, { headers });
  
  
  }

 
  //Obtener un Producto
  get(id:number):Observable<Producto>{

    return  this.http.get<Producto>(this.url+'/'+id);
  }

  //Actualiza un Producto
  /*
  update(producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(this.url,producto);
  }
  */

  update(producto:Producto):Observable<Producto>{
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({ ...producto});
     const url = `${this.url}/${producto.id}`;
    console.log('esto es el que envia para acuaLIZAR',url,producto);
    return this.http.put<Producto>(url, body, { headers });
    //return this.http.put<Producto>(this.url,producto);
  }
 /*
  update(id: number, producto: Producto): Observable<Producto> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({ ...producto, id });
    const url = `${this.url}/${id}`;
    return this.http.put<Producto>(url, body, { headers });
  }
  */
  //Eliminar un Producto
  delete(id:number):Observable<Producto>{
    
    return  this.http.delete<Producto>(this.url+'/'+id);
  }


}
