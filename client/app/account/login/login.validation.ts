import {Validators} from '@angular/forms';

export const validationMessages = {
  email: {
    required: 'is required.',
    email: 'Must be a valid email address'
  },
  password: {
    required: 'is required.',
    minlength: 'Minimum 6 characters long.',
  }
};

export const formErrors = {
  email: '',
  password: ''
};

export const validationConfig = {
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
};
