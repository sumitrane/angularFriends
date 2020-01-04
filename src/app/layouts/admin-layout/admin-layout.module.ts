import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

//theme 
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

// my imports during development
import { MatTableModule, MatSortModule, MatPaginatorModule, MatSlideToggleModule } from '@angular/material';
import { QuillModule } from 'ngx-quill';
// my imports for components
import { UserComponent } from '../../main/user/user.component';
import { ChefComponent } from '../../main/chef/chef.component';
import { TermsAndConditionsComponent } from '../../main/terms-and-conditions/terms-and-conditions.component';
import { UserListComponent } from 'app/main/user/user-list/user-list.component';
import { UserDetailComponent } from 'app/main/user/user-detail/user-detail.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { AdminDashboardComponent } from 'app/main/admin-dashboard/admin-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    QuillModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UserComponent,
    ChefComponent,
    TermsAndConditionsComponent,
    UserListComponent,
    UserDetailComponent,
    AdminDashboardComponent,

  ]
})

export class AdminLayoutModule {}
