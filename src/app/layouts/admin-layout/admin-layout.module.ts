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
import { QuillModule } from 'ngx-quill';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSlideToggleModule 
} from '@angular/material';

// my imports for components
import { AdminDashboardComponent } from 'app/main/admin-dashboard/admin-dashboard.component';
import { UserComponent } from '../../main/user/user.component';
import { ChefComponent } from '../../main/chef/chef.component';
import { TermsAndConditionsComponent } from '../../main/terms-and-conditions/terms-and-conditions.component';
import { UserListComponent } from 'app/main/user/user-list/user-list.component';
import { UserDetailComponent } from 'app/main/user/user-detail/user-detail.component';
import { UserEditComponent } from 'app/main/user/user-edit/user-edit.component';
import { QuestionnairesComponent } from 'app/main/questionnaires/questionnaires.component';
import { QuestionnairesListComponent } from 'app/main/questionnaires/questionnaires-list/questionnaires-list.component';
import { QuestionnairesManageComponent } from 'app/main/questionnaires/questionnaires-manage/questionnaires-manage.component';
import { ChefListComponent } from 'app/main/chef/chef-list/chef-list.component';
import { ChefDetailComponent } from 'app/main/chef/chef-detail/chef-detail.component';
import { CategoryComponent } from 'app/main/category/category.component';
import { CategoryListComponent } from 'app/main/category/category-list/category-list.component';
import { CategoryManageComponent } from 'app/main/category/category-manage/category-manage.component';
import { ServicesComponent } from 'app/main/services/services.component';
import { ServicesListComponent } from 'app/main/services/services-list/services-list.component';
import { ServicesManageComponent } from 'app/main/services/services-manage/services-manage.component';




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

    AdminDashboardComponent,
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    ChefComponent,
    ChefListComponent,
    ChefDetailComponent,
    TermsAndConditionsComponent,
    UserEditComponent,
    QuestionnairesComponent,
    QuestionnairesListComponent,
    QuestionnairesManageComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryManageComponent,
    ServicesComponent,
    ServicesListComponent,
    ServicesManageComponent,

  ]
})

export class AdminLayoutModule {}
