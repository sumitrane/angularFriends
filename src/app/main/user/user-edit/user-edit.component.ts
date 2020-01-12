import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'app/common/commonComponent';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent extends BaseComponent implements OnInit {
  constructor(inj:Injector) 
  { 
    super(inj);

    this.activatedRoute.params.subscribe( params =>
      {
        this.userId=params['id']
        this.getUserProfile(params['id'])
      }
    )
  }

  public user:any = {}
  public userId:number;

  ngOnInit() {
  }

  getUserProfile(userId){
    let data = { }
    this.commonService.callApi('users/'+userId, data, 'get',false,true).then(success=>{
      if(success.status == 200){
        this.user = success.entity;
        console.log(this.user);
        this.user.status=this.user.status.toUpperCase();
      }
      else
      {
       this.popToast('error',success.message)
        }
    })
  }

  submitForm1(user1){
    console.log('1111')
    console.log(user1);
  }

  submitForm(user1){
    console.log(user1);
    let user = { 
      id:user1.id,
      firstName:user1.firstName,
      middleName:user1.middleName,
      lastName:user1.lastName,
      contactNumber:user1.contactNumber,
      emailId:user1.emailId,
      status:user1.status
    }
    
    this.commonService.callApi('users/'+this.userId, user, 'post',false,true).then(success=>{
      if(success.status == 200){
        console.log(success);
      }
      else
      {
      this.popToast('error',success.message)
        }
      })
  }

}
