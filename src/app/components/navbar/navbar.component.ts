import { VariablesGlobales } from './../../variableGlobales';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public varGlo: VariablesGlobales) { }

  ngOnInit() {
  }

  openSide() {
    this.varGlo.sideStatus = true;
  }

}
