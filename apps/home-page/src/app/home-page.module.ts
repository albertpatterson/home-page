import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WeatherWidgetComponent } from './weatherWidget/weather-widget/weather-widget.component';
import { VariableLocationWeatherWidgetComponent } from './weatherWidget/variable-location-weather-widget/variable-location-weather-widget.component';
import { LocationSelectorComponent } from './weatherWidget/location-selector/location-selector.component';

import { WeatherService } from "./weatherWidget/services/weather.service";
import { LocationService } from "./weatherWidget/services/location.service";
import { WeatherSpinnerComponent } from './weatherWidget/weather-spinner/weather-spinner.component';

import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    VariableLocationWeatherWidgetComponent,
    WeatherWidgetComponent,
    LocationSelectorComponent,
    WeatherSpinnerComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap:    [ HomePageComponent ],
  providers: [
    WeatherService,
    LocationService,
  ]
})
export class HomePageModule { }
