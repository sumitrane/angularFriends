import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { BaseComponent } from 'app/common/commonComponent';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseComponent implements OnInit {

  constructor(inj:Injector) 
  { 
    super(inj);
  }

  public userArr: Array<any> = [];

  public data:any= {};
  dataSource:any;
  
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
        this.userArr = success.entity
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
  displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'contactNumber','status'];
  
  // *************************************************************//

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
