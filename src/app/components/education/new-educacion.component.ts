import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEdu: string = '';
  descripcionEdu: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nombreEdu, this.descripcionEdu);
    this.sEducacion.save(edu).subscribe(
      data => {
        alert("La experiencia se agregó correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló la carga de la educación");
        this.router.navigate(['']);
      }
    )
  }
}
