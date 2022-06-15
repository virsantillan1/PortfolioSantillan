import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-arg-pro',
  templateUrl: './logo-arg-pro.component.html',
  styleUrls: ['./logo-arg-pro.component.css']
})
export class LogoArgProComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

}
