import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder
  ) {}
  formGroup: FormGroup;
  username: any = '';
  password: any = '';
  showSpinner: any;
  loginEnable: boolean = true;

  ngOnInit(): void {
    this.createForm();
    this.helperService.getData().subscribe((result) => {
      console.log(result);
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  getError(el) {
    switch (el) {
      case 'email':
        if (this.formGroup.get('email').hasError('required')) {
          return 'Email required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }
  onSubmit(post) {
    console.log(post);
    this.helperService.getData().subscribe((result) => {
      console.log(result);
    });
    this.helperService.postData(post);
    // this.post = post;
  }
}
