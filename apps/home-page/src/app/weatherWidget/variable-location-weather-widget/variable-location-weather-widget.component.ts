import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'variable-location-weather-widget',
  templateUrl: './variable-location-weather-widget.component.html',
  styleUrls: ['./variable-location-weather-widget.component.css']
})
export class VariableLocationWeatherWidgetComponent implements OnInit {

  public coords: string = "";
  public location: string = "Update Location";

  public view: string = "location";

  constructor() { }

  ngOnInit() {
  }

  showLocationSelector(){
    this.view = "location";
  }

  doUpdateLocation(newLocation: any){
    this.location = newLocation.name;
    this.coords = newLocation.coords;
    this.view = "weather"; 
  }
}
