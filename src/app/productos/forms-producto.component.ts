import { Component, OnInit } from '@angular/core';
import { Detalle, Producto } from './producto';
import { Categoria } from './categoria';
import { ProductoService } from './producto.service';
import { CategoriaService } from './categoria.service';
import { ProductosdetalleService } from './productosdetalle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forms-producto',
  templateUrl: './forms-producto.component.html',
  styleUrls: ['./forms-producto.component.css']
})
export class FormsProductoComponent implements OnInit{
  producto:Producto = new Producto();
  //const producto = new Producto();
  detalle:Detalle = new Detalle();

  detalles:Detalle[] = [];
  productos:Producto[] = [];
  categorias:Categoria[] = [];


  titulo:string='Registro del Producto';
  
  tituloDet:string='Detalles del Producto';

  constructor( private productoServices: ProductoService,
               private prooductosdetalleservice:ProductosdetalleService,
               private categoriaServices: CategoriaService,
               private router:Router,
               private activatedRoute:ActivatedRoute){}
  
  ngOnInit():void{
  
    this.categoriaServices.getAll().subscribe(
      (data: any) => {
        this.categorias = data.data;
        console.log(Array.isArray(this.categorias)); // Verificar si la propiedad 'productos' es un array
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.carga5();
    this.cargaDet();

  }

carga5(){

  this.activatedRoute.params.subscribe((params) => {
    const id = params['id'];
    //(console.log('Producto 001 id:', id);
    
    if (id) {

  this.productoServices.get(id).subscribe(
    (data: any) => {
      const producto = new Producto();
      producto.id = data.data.id;
      producto.nombre = data.data.nombre;
      producto.marca = data.data.marca;
      producto.codigo = data.data.codigo;
      producto.id_categoria = data.data.id_categoria;
      producto.categoria = data.data.categoria;
      producto.inactive = data.data.inactive;

  
      // Asignar producto a la propiedad de su componente para utilizarla en la vista
      this.producto = producto;
    },
    (error: any) => {
      console.log(error);
    }
  );

}
});


}

cargaDet(){

  this.activatedRoute.params.subscribe((params) => {
    const id = params['id'];
    //(console.log('Producto 001 id:', id);
    
    if (id) {

  this.prooductosdetalleservice.get(id).subscribe(
    (data: any) => {
      const detalle = new Detalle();
      detalle.id = data.data.id;
      detalle.nombre = data.data.nombre;
      detalle.valor = data.data.marca;
     
      // Asignar detalle a la propiedad de su componente para utilizarla en la vista
      this.detalle = detalle;
    },
    (error: any) => {
      console.log(error);
    }
  );

}
});

}


  cargar4(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      //(console.log('Producto 001 id:', id);
      
      if (id) {
        this.productoServices.get(id).subscribe(
          (data: any) => {
           
            this.productos = data.data;
            console.log('ARREGLOS',Array.isArray(this.productos)); // Verificar si la propiedad 'productos' es un array
            console.log(data.data);
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
    });

 }
/*
  cargar3(): void {
     let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
   // let token = this.getToken();
   if (id) {
    this.productoServices.get(id).subscribe(data =>{
      console.log('entra a carga3=', data)
    })
   }
   
  }

  cargar2(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      //(console.log('Producto 001 id:', id);
      
      if (id) {
        this.productoServices.get(id).subscribe((producto) => {
       
          console.log('Producto id:', producto);
                 
          this.producto = producto;
        });
      }
    });
  }

*/
//es:Producto = new Producto();
/*
 producto = new Producto();
  cargar():void{
   
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          
           this.productoServices.get(id).subscribe(
            (data: any) => {
              producto.data = data.data;

              console.log(producto.data.nombre); // Acceder al nombre del producto
              console.log(producto.data); // Acceder a la marca del producto
              // Acceder a los demás atributos del producto...
            }
          
           );
            
        }
      }
    );
    //console.log('Producto id:' ,  this.es);
  }
*/


  create():void{
    console.log('producto de create ',this.producto);
    this.productoServices.create(this.producto).subscribe(
      res=>this.router.navigate(['/productos'])
    );
  }

  update():void{
    this.productoServices.update(this.producto).subscribe(
      res=>this.router.navigate(['/productos'])
    );

  }

}


