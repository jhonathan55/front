import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserI, UserResponseI } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private _url = environment.apiUrl;
  constructor(
    private _http: HttpClient
  ) { }

  
  createUser(user:UserI):Observable<UserResponseI>{
    return this._http.post<UserResponseI>(this._url+'user',user);
  }
}
