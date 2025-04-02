import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor( private router: Router,private auth:AuthService,private tostar:ToastrService) {}
  //logout
  navigateLogin(){
    this.auth.removeToken()
    this.auth.isAuthenticated = false;
    this.router.navigate(["/login"]);
    this.tostar.success("You have successfully logged out.")
  }

}
