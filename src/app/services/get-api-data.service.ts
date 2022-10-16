import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {CryptoChipDTO} from "../models/crypto-chip-DTO";

@Injectable()
export class GetApiDataService {
  constructor(private _httpClient: HttpClient) {
  }

  getChipsData(): Observable<CryptoChipDTO[]> {
    return this._httpClient.get<CryptoChipDTO[]>('https://api2.binance.com/api/v3/ticker/24hr');

  }
}
