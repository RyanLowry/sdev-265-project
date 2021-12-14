import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
// probably not the best way to handle this, but this is a master list of every route that the server has, and a decent way of handling this information.
export class ServerService {

  session?: any;
  constructor(private http: HttpClient,public toastr:ToastrService) {
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
    }).catch((e:any) => {
      this.toastr.error(e.error.status);
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
    return this.request('POST',  `${this.serverLocation}/userRecipe`, event)
  }
  getChecklist(event:any){
    return this.request('POST',  `${this.serverLocation}/userChecklist`, event)
  }
  getChecklistItems(event:any){
    return this.request('POST',  `${this.serverLocation}/getChecklistItem`, event)
  }
  getShared(event:any){
    return this.request('POST',  `${this.serverLocation}/userShared`, event)
  }
  // TODO: Make one of these get information differently
  setRecipeItems(event:any){
    return this.request('POST',  `${this.serverLocation}/recipeItem`, event)
  }
  setChecklistItems(event:any){
    return this.request('POST',  `${this.serverLocation}/addChecklistItem`, event)
  }
  updateChecklistItems(event:any){
    return this.request('PUT',  `${this.serverLocation}/addChecklistItem`, event)
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
  shareRecipe(event:any){
    return this.request('POST',  `${this.serverLocation}/shareRecipe`, event)
  }
  logoutAccount(event:any){
    return this.request('POST', `${this.serverLocation}/logout`,event)
  }
  removeChecklistItems(event:any){
    return this.request('DELETE',  `${this.serverLocation}/removeChecklistItem`, event)
  }
  removeRecipe(event:any){
    return this.request('DELETE',  `${this.serverLocation}/removeRecipe`, event)
  }
  removeChecklist(event:any){
    return this.request('DELETE',  `${this.serverLocation}/removeChecklist`, event)
  }
}