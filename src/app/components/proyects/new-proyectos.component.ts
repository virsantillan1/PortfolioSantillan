import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombrePro: string = '';
  descripcionPro: string = '';

  constructor(private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pro = new Proyectos(this.nombrePro, this.descripcionPro);
    this.sProyectos.save(pro).subscribe(
      data => {
        alert("El proyecto se agregó correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló la carga del proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
