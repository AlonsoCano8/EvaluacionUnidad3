import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  
  datos: Array<string> = [];
  fecha: Date;
  constructor(private _builder: FormBuilder) { 
    this.notForm1=this._builder.group({
      tit: ['', Validators.required],
      desc:['', Validators.required],
    
    })
  }

  notForm1: FormGroup

  ngOnInit(): void {
  }

  enviar(values){
    this.fecha= new Date;
    this.datos.push(values);
    this.notForm1.reset();
    console.log(this.datos);
  }
}
