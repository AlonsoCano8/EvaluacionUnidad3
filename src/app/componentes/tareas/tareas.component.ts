import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Notas} from '../../model/tareas'


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {

  tareasAry : Array<string>=[];
  isDisabled : boolean;
  arre:Array<Notas>=[];

  constructor(private _builder: FormBuilder) { 
      this.tarForm1=this._builder.group({
        tarea: ['', Validators.required],
        check :[]   
      })
  }

  tarForm1: FormGroup
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('arreglo'))){
      this.mostrarArreglo();
    }
  }

  mostrarArreglo(){
    this.arre= JSON.parse(localStorage.getItem( 'arreglo'));
  }

  enviar(values){
    this.arre.push(values);
    localStorage.setItem('arreglo', JSON.stringify(this.arre));
    this.tarForm1.reset();
    console.log(this.arre);
  }

  Eliminar(){
    this.tareasAry=[];
    localStorage.removeItem('arreglo');
  }

  desactivar(numero){
    for (let index = 0; index < this.arre.length; index++) {
      let tarea = index;
      if(tarea == numero){
        this.arre[tarea].check  = true ;
        localStorage.setItem('arreglo', JSON.stringify(this.arre));
      }
    }
  }
}
