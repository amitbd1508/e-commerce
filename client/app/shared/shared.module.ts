import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CartItemCounterComponent} from './components/cart-item-counter/cart-item-counter.component';

@NgModule({
  declarations: [
    CartItemCounterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    CartItemCounterComponent,
  ],
  providers: []
})
export class SharedModule {
}
