import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VeiculoData, VeiculosAPI } from '../models/veiculo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<VeiculosAPI> {
    return this.http.get<VeiculosAPI>(`${this.baseUrl}/vehicles`);
  }

  getVehicleData(vin: string): Observable<VeiculoData> {
    return this.http.post<VeiculoData>(`${this.baseUrl}/vehicleData`, { vin });
  }
}
