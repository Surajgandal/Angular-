import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  getRoot(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  // getWeatherData(cityName:string): Observable<WeatherData>{
  //     return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
  //       headers:new HttpHeaders()
  //       .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
  //       .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
       
  //       params:new HttpParams()    
  //       .set('city',cityName)
  
  //    });
  // }




  
getWeatherData(cityName:string): Observable<WeatherData>{
  let weatherApiBaseUrl='https://weather-by-api-ninjas.p.rapidapi.com/v1/weather'
  // let headers= new HttpHeaders().set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue).set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue)
  let headers= new HttpHeaders().set('X-RapidAPI-Host','weather-by-api-ninjas.p.rapidapi.com').set('X-RapidAPI-Key','fd1263f7d8msha958299caeac617p1c379cjsn7d25d83c28c4')
  let  params=new HttpParams().set('city',cityName)  
  //let queryParams=new HttpParams();  
  //queryParams = queryParams.append("city",cityName); 
  return this.http.get<WeatherData>(weatherApiBaseUrl,{headers,params});

}

}



//let headers= new HttpHeaders().set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue).set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue)
//let queryParams=new HttpParams();  
//queryParams = queryParams.append("city",cityName); 
//params:queryParams