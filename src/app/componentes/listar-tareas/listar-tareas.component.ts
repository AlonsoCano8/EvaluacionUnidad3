import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent implements OnInit {


  @Input() listaTareas : String;

  TarDes : boolean;

  constructor() { }

  ngOnInit(): void {
  }

  Inhabilitar(){
    this.TarDes=true;
  }

}
