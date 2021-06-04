import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';

@Component({
  selector: 'app-target-dashboard',
  templateUrl: './target-dashboard.component.html',
  styleUrls: ['./target-dashboard.component.scss']
})
export class TargetDashboardComponent implements OnInit {

  @Input() country: Country;

  constructor() { }

  ngOnInit(): void {
    console.log('COUNTRY RECIBIDO',this.country.name)
  }

}
