import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { GetApiDataService } from '../../services/get-api-data.service';
import {map, Observable} from "rxjs";
import {CryptoChipDTO} from "../../models/crypto-chip-DTO";

@Component({
  selector: 'app-display-crypto-chips',
  styleUrls: ['./display-crypto-chips.component.scss'],
  templateUrl: './display-crypto-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayCryptoChipsComponent {
  constructor(private _getApiDataService: GetApiDataService) {
  }

  data$: Observable<string[] | null> = this._getApiDataService.getChipsData().
  pipe(
    map((chips: CryptoChipDTO[]) => chips.map(
      (chip: CryptoChipDTO) => chip.symbol)));
}
