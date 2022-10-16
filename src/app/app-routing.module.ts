import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisplayCryptoChipsComponent } from './components/display-crypto-chips/display-crypto-chips.component';
import { DisplayCryptoChipsComponentModule } from './components/display-crypto-chips/display-crypto-chips.component-module';
import { GetApiDataServiceModule } from './services/get-api-data.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'crypto', component: DisplayCryptoChipsComponent }]), DisplayCryptoChipsComponentModule, GetApiDataServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
