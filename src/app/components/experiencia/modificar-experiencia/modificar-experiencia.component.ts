import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-modificar-experiencia',
  templateUrl: './modificar-experiencia.component.html',
  styleUrls: ['./modificar-experiencia.component.css']
})
export class ModificarExperienciaComponent implements OnInit {

  expLab:Experiencia=null;
  expLab2:Experiencia[]=null;//verificar si anda

  constructor(private sExperiencia: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data=>{
        this.expLab2 = data;
      }, err=>{
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];

    this.sExperiencia.update(id, this.expLab).subscribe(data => {this.router.navigate(['']);

  }, err=> {
    alert("error al modificar");
    this.router.navigate(['']);
  })

  }

}
