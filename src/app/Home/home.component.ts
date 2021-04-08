import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  username: any;
  password: any;
  showSpinner: any;

  ngOnInit(): void {
    this.helperService.getData().subscribe((result) => {
      console.log(result);
    });
  }

  login() {}
}
