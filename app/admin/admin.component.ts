import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
  @ViewChild('overlay') overlay!: ElementRef;
  username: string;
  password: string;
  message: string;
  data: any;

  constructor(private http: HttpClient) {
    this.username = '';
    this.password = '';
    this.message = '';
  }
  ngAfterViewInit(): void {
    this.fadeOut();
  }

  fadeOut() {
    setTimeout(() => {
      this.overlay.nativeElement.style.opacity = '0';
      setTimeout(() => {
        this.overlay.nativeElement.style.display = 'none';
      }, 1000);
    }, 0);
  }


  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.message = 'Login Successful';
      this.getData();
    } else {
      this.message = 'Invalid username or password';
    }
  }

  getData(): void {
    this.http.get('http://localhost:3010/feedbacks').subscribe(data => {
      this.data = data;
    });
  }
}
