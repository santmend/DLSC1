import { inject } from "@angular/core";
import { Router } from "@angular/router";
export const GuardClient = () => {
 const rout = inject(Router);
if(localStorage.getItem("Rol") == "cliente"){
   return true;
}else{
     rout.navigate(['inicio'])
    return false
}
}