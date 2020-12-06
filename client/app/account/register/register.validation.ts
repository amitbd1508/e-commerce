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
    password: 'Write your password properly',
    minlength: 'Minimum 4 characters long.',
  },
  confirmPassword: {
    required: 'is required.',
    confirmPassword: 'Must be same as password',
    minlength: 'Minimum 4 characters long.',
  }
};

export const formErrors = {
  name: 'Write your full name.',
  email: 'Write your email.',
  password: 'Write your password.',
  confirmPassword: 'Please confirm your password.'
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
  const equalControl = form.get(equalToName);

  if (control.value && !equalControl.value) {
    control.setErrors(null);
    equalControl.setErrors(null);
    return null;
  }
  else if (control.value !== equalControl.value) {
    control.setErrors({[errorKey]: true}, );
    equalControl.setErrors({[errorKey]: true}, );
    return {
      [errorKey]: true
    };
  } else {
    control.setErrors(null);
    equalControl.setErrors(null);
    return null;
  }
};
