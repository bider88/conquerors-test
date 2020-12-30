import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { CivilizationInterface } from './../../models/civilization.interface';
import { CivilizationElementInterface } from './../../models/civilization-element.interface';

@Injectable({
  providedIn: 'root'
})
export class ConquerorService {

  private urlApi = environment.urlApi

  constructor(
    private http: HttpClient
  ) { }

  getConquerors(): Observable<CivilizationElementInterface[]> {
    // return this.http.get(`${this.urlApi}civilizations`);
    return this.http.get<CivilizationInterface>('assets/mock/conquerors-data.json').pipe(
      map( (res: CivilizationInterface) => res.civilizations)
    );
  }
}
