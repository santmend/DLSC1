import { inject } from "@angular/core";
import { Router } from "@angular/router";





export const GuardEmple = () => {
   
 const rout = inject(Router);


if(localStorage.getItem("Rol") == "empleado"){
   return true;
}else{
     rout.navigate(['inicio'])
    return false
}
}