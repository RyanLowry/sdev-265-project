import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  session?: any;
  constructor(private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      withCredentials:true,
      body: data,
      responseType: 'json',
      observe: 'response',
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    }).catch(e => {
      console.log(e)
    });
  }
  // ADD ${environment.serverUrl} for testing
  serverLocation:string = environment.serverUrl || '';
  createAccount(event:any) {
    return this.request('POST', `${this.serverLocation}/register`,event);
  }
  loginAccount(event : any) {
    return this.request('POST', `${this.serverLocation}/auth`, event);
  }
  createRecipe(event:any){
    return this.request('POST',  `${this.serverLocation}/addRecipe`, event)
  }
  createChecklist(event:any){
    return this.request('POST',  `${this.serverLocation}/addChecklist`, event)
  }
  getRecipes(event:any){
    return this.request('GET',  `${this.serverLocation}/userRecipe`, event)
  }
  getrecipes(event:any){
    return this.request('GET',  `${this.serverLocation}/userChecklist`, event)
  }
  // TODO: Make one of these get information differently
  setRecipeItems(event:any){
    return this.request('POST',  `${this.serverLocation}/recipeItem`, event)
  }
  getRecipeItems(event:any){
    return this.request('POST',  `${this.serverLocation}/recipeItems`, event)
  }
  updateRecipeItems(event:any){
    return this.request('PUT',  `${this.serverLocation}/recipeItem`, event)
  }
  updateRecipeInfo(event:any){
    return this.request('PUT',  `${this.serverLocation}/updateRecipe`, event)
  }
}
// createAccount(event:any) {
//   return this.request('POST', `/register`,event);
// }
// loginAccount(event : any) {
//   return this.request('POST', `/auth`, event);
// }
// createRecipe(event:any){
//   return this.request('POST',  `/addRecipe`, event)
// }
// createChecklist(event:any){
//   return this.request('POST',  `/addChecklist`, event)
// }
// getRecipes(event:any){
//   return this.request('GET',  `/userRecipe`, event)
// }
// getrecipes(event:any){
//   return this.request('GET',  `/userChecklist`, event)
// }