import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'app/common/commonComponent';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent extends BaseComponent implements OnInit {

  constructor(inj:Injector) 
  { 
    super(inj);
  }

  ngOnInit() {
    this.getAllUsers()
    this.getActiveUserCount();
    this.getInactiveUserCount();
  }

  activeUserCount:number
  inActiveUserCount:number
  allUsers:number

  /********************************** */
  getAllUsers(){
    let status = "all"
    this.commonService.callApi('users/counts?status='+status, status, 'get',false,true).then(success=>{
      if(success.status == 200){
        this.allUsers = success.entity;
        console.log(this.allUsers);
      }
      else
      {
       this.popToast('error',success.message)
        }
    })
  }
  /********************************** */

  /********************************** */
  getActiveUserCount(){
    let status = "Active"
    this.commonService.callApi('users/counts?status='+status, status, 'get',false,true).then(success=>{
      if(success.status == 200){
        this.activeUserCount = success.entity;
        console.log(this.activeUserCount);
      }
      else
      {
       this.popToast('error',success.message)
        }
    })
  }
  /********************************** */

  /********************************** */
  getInactiveUserCount(){
    let status = "Inactive"
    this.commonService.callApi('users/counts?status='+status, status, 'get',false,true).then(success=>{
      if(success.status == 200){
        this.inActiveUserCount = success.entity;
        console.log(this.inActiveUserCount);
      }
      else
      {
       this.popToast('error',success.message)
        }
    })
  }
  /********************************** */

}
