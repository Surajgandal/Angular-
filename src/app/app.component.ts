import { Component, OnInit } from '@angular/core';

import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myform: any;
  
  constructor(private weatherService:WeatherService){

  }

  
  cityName:string='Mumbai';
  weatherData?:WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);

  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
    if (this.myform.valid) {
      console.log("Form Submitted!");
    }
  }
 
  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      
      next:(response)=> {
        this.weatherData=response;
        console.log(response);
      }

    });
  }
}
