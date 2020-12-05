import {Validators} from '@angular/forms';

export const validationMessages = {
  email: {
    required: 'is required.',
    email: 'Must be a valid email address'
  },
  password: {
    required: 'is required.',
    minlength: 'Minimum 4 characters long.',
    maxlength: 'Cannot be more than 100 characters long.'
  }
};

export const formErrors = {
  email: '',
  password: ''
};

export const validationConfig = {
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]]
};
