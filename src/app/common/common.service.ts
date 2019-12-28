import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map, timeout } from 'rxjs/operators';

import * as config from '../../assets/config/configs';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    public _http:HttpClient
  ) {
    this._apiUrl = this.config.config.apiUrl
   }

  public config = (<any>config);
  public _apiUrl;


  public getToken(key){
    //if(isPlatformBrowser(this.platformId))
    {
      return window.localStorage.getItem(key);
    }
  }
  public setToken(key,value){
    //if(isPlatformBrowser(this.platformId))
    {
      window.localStorage.setItem(key,value);
    }
  }

  /*******************************************************************************************
	@PURPOSE      	: 	Call api.
	@Parameters 	: 	{
							url : <url of api>
							data : <data object (JSON)>
							method : String (get, post)
							isForm (Optional) : Boolean - to call api with form data
							isPublic (Optional) : Boolean - to call api without auth header
						}
	/*****************************************************************************************/
	callApi(url, data, method,isForm?, isPublic?): Promise<any> {
		console.log(this._apiUrl);
		let headers;
		if(isPublic){
			headers = headers = new HttpHeaders({ 'content-Type': 'application/json'});
		}else{
			headers = new HttpHeaders({ 'content-Type': 'application/json', 'Authorization': this.getToken('accessToken')});
		}
		if(isForm){
			//headers = new HttpHeaders({ 'Authorization': this.getToken('accessToken') });
			headers = new HttpHeaders({ 'Authorization': 'Basic '+ window.btoa('sumit' + ':' + 'password') });
		}
		return new Promise((resolve, reject) => {
			if(method == 'post'){
				this._http.post(this._apiUrl + url, data, { headers })
				.subscribe(data => { resolve(data) }, error => { this.showServerError(error)})
			}else if(method == 'get'){
				// let params: { appid: 'id1234', cnt: '5' }
				this._http.get(this._apiUrl + url, { headers })
				.subscribe(data => { resolve(data) }, error => { this.showServerError(error)})
			}
			else if (method == 'delete')
			{
			  // let params = new HttpParams();
			  this._http.delete(this._apiUrl + url,{ headers})
			  .subscribe(
				data => {
					resolve(data);
				},
				error =>
				{
				  this.showServerError(error);
				}
			  );
			}else if (method === 'put') {

				this._http.put(this._apiUrl + url, data, { headers })
				.subscribe(data => { resolve(data) }, error => { this.showServerError(error)})
			}
		})
	}

  /*****************************************************************************************/
	// @PURPOSE      	: 	To show server error
	/*****************************************************************************************/
	public swal = swal;
	showServerError(e){
		console.log(e);
		let text;
		let timeout;
		if(e.status == '429'){
			text = e.error.message;
			timeout = 3000;
		}
		if(e.status == '401')
		{
			text = e.error.message;
			timeout = 3000;
		}
		this.swal.fire({
         
			icon: 'error',
			text: text ? text : 'Something went wrong. Try again.',
			showConfirmButton: false,
        	timer: timeout ? timeout : 3000
          
        })
	}
	/****************************************************************************/

}
