import { Component, OnInit } from '@angular/core';
import { TempoService } from '../http-tempo.service';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {
temp: string;
stateweather: string;
firstPartLink = 'http://openweathermap.org/img/wn/';
secondPart: string // codigo do icon
lastPart = '@2x.png';

srcImg: string;
// http://openweathermap.org/img/wn/10d@2x.png
myWeatherPath: TempoService;

  constructor(myWeather: TempoService) {
    this.myWeatherPath = myWeather;

  }

  ngOnInit() {
    this.lerTempo();
  }


lerTempo() {
  // this.weatherService.city = 'Barcelos';
  this.myWeatherPath.baseask().subscribe(
    data => {
      console.log(data);
      this.temp = data ['main']['temp'];
      this.stateweather = data ['weather'][0]['description'];
      this.secondPart = data ['weather'][0]['icon'];
      this.srcImg = this.firstPartLink + this.secondPart + this.lastPart;
    }
  );
}
}
