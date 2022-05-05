import { Component, OnInit } from '@angular/core';
import {HelperService} from './services/helper.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ipAddress=null;
  geoLocatoion={};

  constructor(private helper : HelperService){}

ngOnInit(){




}



}
