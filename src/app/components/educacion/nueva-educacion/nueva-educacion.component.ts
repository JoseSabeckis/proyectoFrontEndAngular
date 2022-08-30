import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  nombreEducacion:string;
  descripcionEducacion:string;

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const educacion = new Educacion(this.nombreEducacion, this.descripcionEducacion);

    this.educacionService.save(educacion).subscribe(data=>{ alert("educacion creada"); this.router.navigate(['']);},
    err => {
      alert("fallo");
      this.router.navigate(['']);
    })



  }

}
