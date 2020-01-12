import { Component, OnInit, Injector, ViewChild  } from '@angular/core';
import { BaseComponent } from 'app/common/commonComponent';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends BaseComponent implements OnInit {

  constructor(inj:Injector) 
  { 
    super(inj);
  }

  public userArr: Array<any> = [];

  public data:any= {};
  dataSource:any;
  newStatus: string;
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getUserListing(this.data);
  }



  // API call for get user listing //
  /***************************************************************/
  
  getUserListing(data){
    this.commonService.callApi('users', data, 'get',false,true).then(success=>{
      console.log(success.status);
      if(success.status == 200){
        this.userArr = success.entity;
        this.dataSource = new MatTableDataSource(this.userArr);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
  
      }else{
              this.popToast('error',success.message)
            }
      })
  }
  // *************************************************************//

    // *************************************************************//
  // Set column visibility //
  // *************************************************************//
  displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'contactNumber','status','action','edit','delete'];
  
  // *************************************************************//

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //****************************************************************** */
  changeStatus(id,status){
    console.log(id);

    if(status=="ACTIVE"){
      this.newStatus="INACTIVE";
    }
    else if(status=="INACTIVE"){
      this.newStatus="ACTIVE";
    }
    else if(status=="DELETED"){
      this.newStatus="ACTIVE";
    }
    else{
      this.newStatus="INACTIVE";
    }

    this.commonService.callApi('status/'+id, this.newStatus, 'post',false,true).then(success=>{
      console.log(success.status);
      if(success.status == 200){
        this.getUserListing(this.data);
      }
    })
  }
  /************************************************* */

}


