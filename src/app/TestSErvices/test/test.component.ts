import { Component , Injectable, OnInit} from '@angular/core';
import { InvoceService } from 'src/app/Services/Invoce.service';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductService } from 'src/app/Services/product.service';
import { FormGroup, FormControl,Validators,FormBuilder  } from '@angular/forms';
import { Invoce } from 'src/app/modelos/Invoce';
import { Product, Categoria  } from 'src/app/modelos/Product';
//import { Prod  } from 'src/app/modelos/Producto.interface';
import { Router } from '@angular/router';





@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements  OnInit{
  
  
 constructor(private adminService: AdminService, private _fBuild : FormBuilder,  private invoceService: InvoceService,  private productService: ProductService, private rout : Router) {

  }

ngOnInit(): void {
 
}


//listar por rol
onClick1(rol: string) {
  console.log('ID del usuario:', rol);
  this.adminService.listForRol(rol).subscribe({
    next: (data) => {
      console.log("listar : ", data);

      // Obtén una referencia a la tabla
      const tabla = document.getElementById("tablaUsuarios");

      if (tabla) {
        
        // Obtén una referencia al cuerpo de la tabla donde se agregarán los datos
        const tbody = tabla.getElementsByTagName("tbody")[0];

        // Limpia la tabla antes de agregar nuevos datos
        tbody.innerHTML = '';

        // Llena la tabla con los datos de forma dinámica
        data.result.forEach((usuario: any) => { // Puedes usar un tipo más específico en lugar de 'any'
          const row = document.createElement("tr");
          for (const prop in usuario) {
            const cell = document.createElement("td");
            cell.textContent = usuario[prop];
            row.appendChild(cell);
          }
          tbody.appendChild(row);
        });
      } else {
        console.log("La tabla no se encontró en el DOM.");
      }
    },
    error: (e) => {
      console.log("Error :", e);
    }
  });
}


//cambiar de string a numero
parseInt(value: string): number {
  return parseInt(value, 10);
}

 
obtenerDatos() {
  this.productService.getProducts().subscribe({
    next: (data: any) => { // Asegúrate de usar un tipo más específico en lugar de 'any'
      console.log("listar : ", data);

      const tablaCategoria = document.getElementById("tablaCategoria");
      const tablaProductos = document.getElementById("tablaProductos");

      if (tablaCategoria && tablaProductos) {
        // Obtén una referencia al cuerpo de la tabla donde se agregarán los datos
        const tbodyCategoria = tablaCategoria.getElementsByTagName("tbody")[0];
        const tbodyProductos = tablaProductos.getElementsByTagName("tbody")[0];

        // Limpia las tablas antes de agregar nuevos datos
        tbodyCategoria.innerHTML = '';
        tbodyProductos.innerHTML = '';

        // Llena la tabla de categorías con los datos de forma dinámica
        data.result.categoria.forEach((categoria: any) => {
          const row = document.createElement("tr");
          for (const prop in categoria) {
            const cell = document.createElement("td");
            cell.textContent = categoria[prop];
            row.appendChild(cell);
          }
          tbodyCategoria.appendChild(row);
        });

        // Llena la tabla de productos con los datos de forma dinámica
        data.result.producto.forEach((producto: any) => {
          const row = document.createElement("tr");
          for (const prop in producto) {
            const cell = document.createElement("td");
            cell.textContent = producto[prop];
            row.appendChild(cell);
          }
          tbodyProductos.appendChild(row);
        });
      } else {
        console.log("Al menos una de las tablas no se encontró en el DOM.");
      }
    },
    error: (e) => {
      console.log("Error :", e);
    }
  });
}




//cambiar de rol
onClick2(idUsu: number,roll: string){

  this.adminService.updateRol(idUsu, roll).subscribe({
    next: (data) => {
      alert("Respuesta: "+data.message)
    }, error: (e) => {
      console.log("Error :",e)
    }
  })
}


//eliminar usuario por id
onClick3(idProd:number){

    this.adminService.deleteUser(idProd).subscribe({
      next: (data) => {
        alert("Respuesta: "+ data.message)
      }, error: (e) => {
        console.log("Error: ", e)
      }
    })
  
}


/*
//listar productos
getListProduct() {
  this.productService.getProducts().subscribe({
    next: (productos: Product[]) => {
      console.log("listar : ", productos);

      // Obtén una referencia a la tabla
      const tablaProductos = document.getElementById("tablaProductos");

      if (tablaProductos) {
        // Obtén una referencia al cuerpo de la tabla donde se agregarán los datos
        const tbodyProductos = tablaProductos.getElementsByTagName("tbody")[0];

        // Limpia la tabla antes de agregar nuevos datos
        tbodyProductos.innerHTML = '';

        // Llena la tabla con los datos de forma dinámica
        productos.forEach((producto: Product) => {
          const row = document.createElement("tr");
          Object.entries(producto).forEach(([key, value]) => {
            const cell = document.createElement("td");
            cell.textContent = String(value);
            row.appendChild(cell);
          });
          tbodyProductos.appendChild(row);
        });
        
        
        
        
      } else {
        console.log("La tabla de productos no se encontró en el DOM.");
      }
    },
    error: (e) => {
      console.log("Error :", e);
    }
  });
}*/

 

//eliminar producto por id
onClick4(idProdu:number){
  //const id = this.form4.value.idProd;
  this.productService.deleteProdruct(idProdu).subscribe({
    next:(data) =>{
       console.log("Data: ", data)
    },error:(e) =>{
      console.log("Error: ",e)
    }
  })
}






//agregar un producto nuevo
onClick6(categoria: string, nombre: string, precio: string){
  if (!categoria ||  !nombre || !precio ) {
    console.log('Por favor, complete todos los campos y asegúrese de que el precio sea no negativo.');
    return; 
  }
  

  const model : Product ={
  idProducto : "",
  idCategoria : categoria,
  nombre: nombre,
  precio: precio 
  }

  this.productService.addProduct(model).subscribe({
    next:(data) => {
      console.log("Prodruct: ",data)
    },error:(e) =>{
      console.log("Error: ", e)
    }
  })
}


  
  //llama el servicio de recuperar contraseña
  /*recuperarContra(){
    this.userService.recuperarContra("string").subscribe({
      next:(data) =>{
         console.log("Data: ", data)
      },error:(e) =>{
        console.log("Error: ",e)
      }
    })
   }*/



   /*
   recuperarContra() {
    
    this.userService.recuperarContra("").subscribe({
      next: (data) => {
        console.log("Respuesta: ", data)
      }, error: (e) => {
        console.log("Error: ", e)
      }
    })
  }*/
  





/*
  listar() {
    this.adminService.listForRol("cliente").subscribe(
      {
        next: (data) => {
          console.log("listar da: ", data)
        }, error: (e) => {
          console.log("Error: ", e)
        }
      }

    )
  }*/
/*
  nuevoRol() {
    this.adminService.updateRol(3, "cliente").subscribe({
      next: (data) => {
        console.log("Respuesat: ", data)
      }, error: (e) => {
        console.log("Error: ", e)
      }
    })
  }*/
/*
  deleteUser() {
    this.adminService.deleteUser(2).subscribe({
      next: (data) => {
        console.log("Respuesta: ", data)
      }, error: (e) => {
        console.log("Error: ", e)
      }
    })
  }*/

  /*
  addInvoce() {
    const model: Invoce = {
      correo: "nico.rodriguez.torres.71@gmail.com",
      idFactura: 1,
      idProducto: 5,
      nombreProducto: "compraPrueba",
      idUsuario: 3,
      precio: 2000

    }
    this.invoceService.addInvoce(model).subscribe({
      next: (data) => {
        console.log("Add: ", data)
      }, error: (e) => {
        console.log("Error: ", e)
      }
    })
  }*/
  /*
  registerUser(){
    const model : User = {
      correo: "nicolas@gmail.com",
      idUsuario : "",
      nombre: "nicolas",
      password: "1234",
      rol: "1",
      telefono: "1234567"
    }
    this.userService.register(model).subscribe({
      next:(data) => {
        console.log("Data: ",data)
      },error:(e) => {
        console.log("Error: ",e)
      }
    })
  }*/
  /*
   addProuct(){
    const model : Product = {
      idCategoria: "3",
      idProducto: "",
      nombre: "PruebaProduct",
      precio:"2000"

    }
    this.productService.addProduct(model).subscribe({
      next:(data) => {
        console.log("Prodruct: ",data)
      },error:(e) =>{
        console.log("Error: ", e)
      }
    })
   }*/

   
   
   
   deleteProdruct(){
    this.productService.deleteProdruct(16).subscribe({
      next:(data) =>{
         console.log("Data: ", data)
      },error:(e) =>{
        console.log("Error: ",e)
      }
    })
   }

   refresh(){
    localStorage.removeItem("Token"),
    localStorage.removeItem("Rol")
    this.rout.navigate(['login'])
   }



 

}
