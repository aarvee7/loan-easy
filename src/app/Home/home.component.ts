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

  showData = true;
  lamount:number;
  lrate:number;
  lpay:number;
  ldue:number;
  lyears : number;
  lmonthly :number;

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
 this.formGroup.get('lam').setValue(1000000);
 this.formGroup.get('lterm').setValue(10);
 this.formGroup.get('inter').setValue(10);
    // this.helperService.getData().subscribe((result) => {
    //   console.log(result);
    // });
    this.calculate();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      lam: new FormControl('', [Validators.required,Validators.min(100000),Validators.max(1000000000)]),
      lterm: new FormControl ('',  [Validators.required,Validators.min(5),Validators.max(30)]),
      inter: new FormControl('',[Validators.required])
    });
  }
  getError(el) {
    switch (el) {
      case 'lam':
        if (this.formGroup.get('lam').hasError('required')) {
          return 'Amount required';
        }
        break;
      case 'lterm':
        if (this.formGroup.get('lterm').hasError('required')) {
          return 'Term required';
        }
        break;
        case 'inter':
        if (this.formGroup.get('inter').hasError('required')) {
          return 'Interest required';
        }
        break;
      default:
        return '';
    }
  }
  onSubmit(post) {
    this.calculate();
  }

   calculate(){

    this.lamount = this.formGroup.get('lam').value;
    this.lrate = this.formGroup.get('inter').value;
    this.lyears =  this.formGroup.get('lterm').value;

    const rateof = this.lrate/12/100;
    const tenure = this.lyears * 12;
    const upper = Math.pow((1+rateof),tenure);
    const lower = (Math.pow((1+rateof),tenure) - 1);
    
    this.lmonthly = this.lamount * rateof * (upper/lower);

    this.lpay = this.lmonthly * this.lyears * 12;
    this.ldue = this.lpay - this.lamount;

   }
}
