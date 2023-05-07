import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { API_URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private url:string=`${API_URL}/categorias`

  constructor(private http:HttpClient) { }

   //Obtener Categoria
   getAll():Observable<Categoria[]>{
    return  this.http.get<Categoria[]>(this.url);
    }


}
