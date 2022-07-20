import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreEL: string = '';
  descripcionEL: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Experiencia(this.nombreEL, this.descripcionEL);
    this.sExperiencia.save(exp).subscribe(
      data => {
      alert("La experiencia se agregó correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Falló la carga de la experiencia");
      this.router.navigate(['']);
    }
    )
  }

}

