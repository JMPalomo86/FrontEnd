import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { Producto } from './producto';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  titulo:string="Lista de Productos";


 
  productos: Producto[] = [];
  url: any;
  
  constructor(private productoService:ProductoService,
              private router:Router){ }
  
  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      (data: any) => {
        this.productos = data.data;
        console.log(Array.isArray(this.productos)); // Verificar si la propiedad 'productos' es un array
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
  delete(producto:Producto):void{

   this.productoService.delete(producto.id).subscribe(
    res=>this.productoService.getAll().subscribe(
      response=>producto=response,
      res=>this.router.navigate(['/productos'])
    

    )
   
  
   );
  }

/*
  delete(producto: Producto): void {
    const url = `${this.url}/${producto.data.id}`;
    this.http.delete(url).subscribe(
      res => {
        console.log('Producto eliminado');
        // Aquí podrías actualizar la lista de productos si fuera necesario
      },
      err => {
        console.log('Error al eliminar el producto:', err);
      }
    );
  }
 */
  
  
  
  
  






}
