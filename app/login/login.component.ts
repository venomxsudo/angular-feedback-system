import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  showOverlay = false;
  admin() {
    this.showOverlay = true;

    setTimeout(() => {
      this.router.navigate(['/admin']);
    }, 800);
  }
  feedback() {
    this.showOverlay = true;

    setTimeout(() => {
      this.router.navigate(['/feedback']);
    }, 800);
  }
}
