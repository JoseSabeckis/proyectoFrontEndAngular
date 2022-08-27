import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  persona: persona = new persona("","","");

  constructor(public personaServicio: PersonaService) { }

  ngOnInit(): void {
    this.personaServicio.getPersona().subscribe(x=>(this.persona = x));
  }

}
