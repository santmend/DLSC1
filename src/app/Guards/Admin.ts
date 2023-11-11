import { inject } from "@angular/core";
import { Router } from "@angular/router";
export const GuardAdmin = () => {
 const rout = inject(Router);
 
if(localStorage.getItem("Rol") == "administrador"){
   return true;
}else{
     rout.navigate(['inicio'])
    return false
}
}