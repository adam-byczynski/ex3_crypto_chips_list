import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { DisplayCryptoChipsComponent } from './display-crypto-chips.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule],
  declarations: [DisplayCryptoChipsComponent],
  providers: [],
  exports: [DisplayCryptoChipsComponent]
})
export class DisplayCryptoChipsComponentModule {
}
