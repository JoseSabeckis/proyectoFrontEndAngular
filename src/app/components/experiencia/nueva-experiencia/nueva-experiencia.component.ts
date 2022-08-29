import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  nombreExperiencia: string = '';
  descripcionExperiencia: string = '';

  constructor(private sExperiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("experiencia agragada");
      this.router.navigate(['']);

    }, err => {
      alert("fallo ");
      this.router.navigate(['']);
    })
  }

}
