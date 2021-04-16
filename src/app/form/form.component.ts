import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  operadorA:number=0;
  operadorB:number=0;
  Resultado:number=0;
  @Output() result=new EventEmitter<number>();




 add=()=>{
  this.Resultado=this.operadorA+this.operadorB
  this.result.emit(this.Resultado);
}

  constructor() { }

  ngOnInit(): void {
  }

}
