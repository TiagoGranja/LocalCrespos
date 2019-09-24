import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TempoService {

  constructor(private http: HttpClient) { }
url = 'https://api.openweathermap.org/data/2.5/weather?q=Barcelos,pt&APPID=27572f5bbca7f98bcd805ae3a4f99413&units=metric&lang=pt';

baseask() {
  return this.http.get(this.url);
}
}
