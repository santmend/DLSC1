import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {


  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  refresh(){
    localStorage.removeItem("Token"),
      localStorage.removeItem("Rol")
    this.rout.navigate(['login'])
  }
  constructor(private rout: Router) {
    
  
    
}
}
