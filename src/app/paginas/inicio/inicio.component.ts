import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  isActive = false;
  isNosotros = true;
  isPortafolio = true;
  isClientes = true;


  
  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private rout: Router) {

    this.rout.navigate(['Test'])

    if (localStorage.getItem("Rol") == "administrador") {
      console.log("entra")
      this.isActive = true;
      this.isNosotros = false;
      this.isPortafolio = false;
      this.isClientes = false;
      this.rout.navigate(['inicio'])


    } else {
      console.log("No entra")

    }
    if (localStorage.getItem("Rol") == "empleado") {
      console.log("entra")
      this.isActive = false;
      this.isNosotros = false;
      this.rout.navigate(['inicio'])

    } else {
      console.log("No entra")

    }
    if (localStorage.getItem("Rol") == "cliente") {
      console.log("entra")
      this.isActive = false;
      this.isNosotros = true;
      this.isPortafolio = true;
      this.isClientes = true;
      this.rout.navigate(['inicio'])

    } else {
      console.log("No entra")

    }
  }
  
  
  refresh() {
    localStorage.removeItem("Token"),
      localStorage.removeItem("Rol")
    this.rout.navigate(['login'])
  }
}
