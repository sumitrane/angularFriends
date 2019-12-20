import { Component, OnInit, PLATFORM_ID, Injector, NgZone, APP_ID } from '@angular/core';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";
import { CommonService } from './common.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2'

@Component({
  selector: 'parent-comp',
  template: ``,
  providers: []
})

export class BaseComponent {

  constructor(injector: Injector) {
    this.router = injector.get(Router)
    this.platformId = injector.get(PLATFORM_ID)
    this.appId = injector.get(APP_ID)
    this.commonService = injector.get(CommonService)
    this.http = injector.get(HttpClient)
    this.titleService = injector.get(Title)
    this.metaService = injector.get(Meta)
    this.activatedRoute = injector.get(ActivatedRoute)
    this.baseUrl = this.commonService._apiUrl;

  }

  public activatedRoute:ActivatedRoute;
  public swal = swal;
  public titleService: Title
  public metaService: Meta
  public platformId : any;
  public appId : any;
  public http : HttpClient;
  public router : Router;
  public commonService : CommonService;
  public baseUrl;

  ngOnInit(){

  }

  // *************************************************************//
  //@Purpose : We can use following function to use localstorage
  //*************************************************************//
  setToken(key,value){
    //if(isPlatformBrowser(this.platformId))
    {
      window.localStorage.setItem(key,value);
    }
  }
  getToken(key){
    //if(isPlatformBrowser(this.platformId))
    {
      return window.localStorage.getItem(key);
    }
  }
  removeToken(key){
    //if(isPlatformBrowser(this.platformId))
    {
      window.localStorage.removeItem(key);
    }
  }
  clearToken(){
    //if(isPlatformBrowser(this.platformId))
    {
      window.localStorage.clear()
    }
  }
  //*************************************************************//

  //*************************************************************//
  //@Purpose : We can use following function to use Toaster Service.
  //*************************************************************//
  popToast(type,title){
    // swal({
    //   position: 'center',
    //   type: type,
    //   text: title,
    //   showConfirmButton: false,
    //   timer: 1800,
    //   customClass : 'custom-toaster'
    // })
    swal.fire({
      icon: type,
      text: title,
      timer: 1800,
      showConfirmButton: false

    })
  }

  /****************************************************************************
  @PURPOSE      : To restrict or allow some values in input.
  @PARAMETERS   : $event
  @RETURN       : Boolen
  ****************************************************************************/
  RestrictSpace(e){
    if (e.keyCode == 32) {
      return false;
    }else{
      return true;
    }
  }

  AllowNumbers(e){
    var input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    if (e.which === 43 || e.which === 45) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }

  AllowChar(e){
    if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123) || e.keyCode == 8){
      return true
    }else{
      return false
    }
  }

  NoSpaceAtStart(event)
  {
    let  count=0;
    if (event.keyCode  ==  32  &&  !event.target.value.length) {
       return  false;
    }else  if(event.keyCode  ==  32  &&  count  <  1){
      count++;
    return  true;
    }else  if(event.keyCode  !=  32){
     count  =  0;
     return  true;
    } else  if(count  >=  1){
      return  false; 
    } 
  }
  /****************************************************************************/

  logout(){
      this.removeToken('role');
      this.removeToken('accessToken');
      this.removeToken('emailId');
      this.removeToken('page');
      this.removeToken('Aid');
      this.removeToken('filterobj.subSubCategoryId');
      this.removeToken('filterobj.subCategoryId');
      this.removeToken('filterobj.categoryId');
      this.router.navigate(["/login"]);

    }


  
}
