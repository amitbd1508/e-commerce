import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AccountService} from '../account.service';
import {Router} from '@angular/router';
import {controlsEqual, formErrors, validationConfig, validationMessages} from './register.validation';
import Utils from '../../shared/helpers/helper-methods';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  formErrors = formErrors;
  validationMessages = validationMessages;

  errors: string[];

  constructor(private fb: FormBuilder,
              private service: AccountService,
              private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(): void {
    this.form = this.fb.group(validationConfig, {
      validators: controlsEqual('password', 'confirm-password')
    });

    this.form.valueChanges.subscribe(() => Utils.onFormValueChanged(this.form, this.validationMessages, this.formErrors));
  }

  onRegister(): void {
    this.service.register(this.form.value).subscribe(response => {
      this.router.navigateByUrl('/');
    }, error => this.errors = error.errors);
  }

}
