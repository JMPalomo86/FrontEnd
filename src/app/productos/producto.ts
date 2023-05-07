export class Producto {
    id!: number;
    nombre: string="";
    marca: string="";
    codigo!: number;
    id_categoria: number= 0;
    categoria!: string;
    inactive: number=0;

  }
  
  export class Detalle {
    id!: number;
    nombre!: string;
    valor!: string;
  }
/*
export class Producto {
    id:number=0;
    nombre:string='';
    marca: string='';
    codigo: number=0;
    id_categoria: number=0;
    categoria: string = '';
    inactive: number=0;
}
*/
/*

export class Producto {
    data!: {
        id: number;
        nombre: string;
        marca: string;
        codigo: number;
        id_categoria: number;
        categoria: string;
        inactive: number;
    }; 
}



*/