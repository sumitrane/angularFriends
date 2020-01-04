import { Component, OnInit, Injector } from '@angular/core';

//import { CommonService } from 'src/app/common/common.service';
import swal from 'sweetalert2'
import { BaseComponent } from 'app/common/commonComponent';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  constructor(inj:Injector) {
    super(inj);
   }

   public user:any = {}

  ngOnInit() {
  }

  onLogin(loginForm,user){
    console.log(loginForm);
    console.log(user.email);
    console.log(user.password);
    if(user.email=="abc@gmail.com" && user.password=="123"){
      console.log("sucess");
      this.popToast("success","login");
      this.router.navigate(["/main/admin-dashboard"]);
    }
    else{
         this.popToast('error','Please provide complete information.')
       }

    // let data={
    //   email:user.email,
    //   password:user.password
    // }

    // if(loginForm.valid){
    //   this.commonService.callApi('adminLogin', data, 'post', true, false).then(success=>{
    //     if(success.status == 1){
    //       this.setToken('accessToken', success.access_token);
    //       this.setToken('Aid',success.data._id);
    //       this.setToken('role',success.data.role);
        
    //       this.router.navigate(["/main"]);
    //     }else{
    //       this.popToast('error',success.message)
    //     }
    //   })
    // }else{
    //   this.popToast('error','Please provide complete information.')
    // }
      
    }

}
