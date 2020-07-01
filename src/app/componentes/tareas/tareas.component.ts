import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareasAry : Array<string>=[];

  constructor(private _builder: FormBuilder) { 
      this.tarForm1=this._builder.group({
        tarea: ['', Validators.required],   
      })
  }

  tarForm1: FormGroup
  ngOnInit(): void {
  }

  enviar(values){
    this.tareasAry.push(values);
    this.tarForm1.reset();
  }

  Eliminar(){
    this.tareasAry=[];
  }
}
