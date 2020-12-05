import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {formErrors, validationConfig, validationMessages} from './login.validation';
import {AccountService} from '../account.service';
import {ActivatedRoute, Router} from '@angular/router';
import Utils from '../../shared/helpers/helper-methods';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formErrors = formErrors;
  validationMessages = validationMessages;

  returnUrl: string;

  constructor(private fb: FormBuilder,
              private service: AccountService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
  }

  buildForm(): void {
    this.form = this.fb.group(validationConfig);

    this.form.valueChanges.subscribe(() => Utils.onFormValueChanged(this.form, this.validationMessages, this.formErrors));
    // Utils.onFormValueChanged(this.form, this.validationMessages, this.formErrors);
  }

  onLogin(): void {
    this.service.login(this.form.value).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    }, error => console.log(error));
  }
}
