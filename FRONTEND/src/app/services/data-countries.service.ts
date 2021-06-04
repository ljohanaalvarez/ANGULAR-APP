import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DataCountriesService {

  private url:string = environment.url_countries

  constructor(
    private http: HttpClient,
  ) { }



  getListCountries():Observable<any>{

    return this.http.get<any>(this.url)
    .pipe(map((response:any[]) => response
    .map(country => ({
      name: country.name,
      alpha3Code:country.alpha3Code,
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      population: country.population})
    )))
  }



}


