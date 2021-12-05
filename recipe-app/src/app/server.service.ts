import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any) {
    console.log(data)
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'response',
    });
    console.log(result)
    return new Promise((resolve, reject) => {
      console.log(resolve)
      result.subscribe(resolve, reject);
    }).catch(e => {
      console.log(e)
    });
  }

  createAccount(event:any) {
    return this.request('POST', `${environment.serverUrl}/register`,event);
  }

  loginAccount(event : any) {
    return this.request('POST', `${environment.serverUrl}/auth`, event);
  }

  createRecipe(event:any){
    return this.request('POST',  `${environment.serverUrl}/addrecipe`, event)
  }
  createChecklist(event:any){
    return this.request('POST',  `${environment.serverUrl}/addchecklist`, event)

  }

}