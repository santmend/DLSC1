import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {

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
