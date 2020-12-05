import {FormGroup, Validators} from '@angular/forms';

export const validationMessages = {
  name: {
    required: 'is required.',
    minlength: 'Minimum 4 characters long.',
    maxlength: 'Cannot be more than 100 characters long.'
  },
  email: {
    required: 'is required.',
    email: 'Must be a valid email address'
  },
  password: {
    required: 'is required.',
    minlength: 'Minimum 4 characters long.',
    maxlength: 'Cannot be more than 100 characters long.'
  },
  confirmPassword: {
    required: 'is required.',
    minlength: 'Minimum 4 characters long.',
    maxlength: 'Cannot be more than 100 characters long.'
  }
};

export const formErrors = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const validationConfig = {
  name: ['', [Validators.required, Validators.min(4), Validators.max(100)]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.min(4), Validators.max(100)]],
  confirmPassword: ['', [Validators.required, Validators.min(4), Validators.max(100)]]
};

export const controlsEqual = (
  controlName: string,
  equalToName: string,
  errorKey: string = controlName
) => (form: FormGroup) => {
  const control = form.get(controlName);

  if (control.value !== form.get(equalToName).value) {
    control.setErrors({[errorKey]: true});
    return {
      [errorKey]: true
    };
  } else {
    control.setErrors(null);
    return null;
  }
};
