import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from 'app/common/commonComponent';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent extends BaseComponent implements OnInit {

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
  public userId:any;

  ngOnInit() {
  }

  getUserProfile(userId){
    let data = { }
    this.commonService.callApi('users/'+userId, data, 'get',false,true).then(success=>{
      if(success.status == 200){
        this.user = success.entity;
        this.user.status=this.user.status.toUpperCase();
      }
      else
      {
       this.popToast('error',success.message)
        }
    })
  }

}
