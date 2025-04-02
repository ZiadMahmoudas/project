import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { RevealService } from '../core/services/reveal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router,private scrollReveal:RevealService) {}
  navigateDetails(){
    this.router.navigate(['/Details']);
  }
  ngOnInit() {
    this.scrollReveal.initScrollAnimations();
  }
}
