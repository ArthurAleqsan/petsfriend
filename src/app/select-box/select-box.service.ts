import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

export interface Services{
  pet_id
  services
}

@Injectable()
export class SelectBoxService {


  constructor(private HttpClient:HttpClient) { }

  getServices():Observable<any>{
    return this.HttpClient.get('http://localhost:3001/services')
  }
}
