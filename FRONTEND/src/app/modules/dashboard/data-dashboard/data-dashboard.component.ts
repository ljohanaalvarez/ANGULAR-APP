import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { DataCountriesService } from 'src/app/services/data-countries.service';

@Component({
  selector: 'app-data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.scss']
})
export class DataDashboardComponent implements OnInit {

  public countryList: Country[] = [];


  constructor(
    private countriesService: DataCountriesService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.countriesService.getListCountries()
    .subscribe(res => {
      res.forEach((element: Country) => {
        this.countryList.push(element)
      });
      console.log('MI LISTA DE PAISES', this.countryList)
    })
  }

}
