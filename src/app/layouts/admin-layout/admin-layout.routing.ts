import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UserComponent } from '../../main/user/user.component';
import { ChefComponent } from '../../main/chef/chef.component';
import { TermsAndConditionsComponent } from 'app/main/terms-and-conditions/terms-and-conditions.component';
import { UserListComponent } from 'app/main/user/user-list/user-list.component';
import { UserDetailComponent } from 'app/main/user/user-detail/user-detail.component';
import { AdminDashboardComponent } from 'app/main/admin-dashboard/admin-dashboard.component';
import { UserEditComponent } from 'app/main/user/user-edit/user-edit.component';
import { QuestionnairesComponent } from 'app/main/questionnaires/questionnaires.component';
import { QuestionnairesListComponent } from 'app/main/questionnaires/questionnaires-list/questionnaires-list.component';
import { QuestionnairesManageComponent } from 'app/main/questionnaires/questionnaires-manage/questionnaires-manage.component';
import { ChefDetailComponent } from 'app/main/chef/chef-detail/chef-detail.component';
import { ChefListComponent } from 'app/main/chef/chef-list/chef-list.component';
import { CategoryListComponent } from 'app/main/category/category-list/category-list.component';
import { CategoryManageComponent } from 'app/main/category/category-manage/category-manage.component';
import { CategoryComponent } from 'app/main/category/category.component';
import { ServicesComponent } from 'app/main/services/services.component';
import { ServicesListComponent } from 'app/main/services/services-list/services-list.component';
import { ServicesManageComponent } from 'app/main/services/services-manage/services-manage.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: '',                     component: AdminDashboardComponent },
    { path: 'admin-dashboard',      component: AdminDashboardComponent },
    { path: 'users',                 component: UserComponent,
        children: [
            { path: "", redirectTo: "user-list", pathMatch: "full" },
            { path: "user-list", component: UserListComponent, pathMatch: "full"},
            { path: "user-detail/:id", component: UserDetailComponent, pathMatch: "full"},
            { path: "user-edit/:id", component: UserEditComponent, pathMatch: "full"},
        ]
    },
    { path: 'chefs',                 component: ChefComponent,
        children: [
            { path: "", redirectTo: "chefs-list", pathMatch: "full" },
            { path: "chefs-list", component: ChefListComponent, pathMatch: "full"},
            { path: "chefs-detail/:id", component: ChefDetailComponent, pathMatch: "full"},
        ]
    },
    { path: 'termsandconditions',   component: TermsAndConditionsComponent},
    { path: 'questionnaires',                 component: QuestionnairesComponent,
        children: [
            { path: "", redirectTo: "questionnaires-list", pathMatch: "full" },
            { path: "questionnaires-list", component: QuestionnairesListComponent, pathMatch: "full"},
            { path: "questionnaires-edit/:id", component: QuestionnairesManageComponent, pathMatch: "full"},
        ]
    },
    { path: 'category',                 component: CategoryComponent,
        children: [
            { path: "", redirectTo: "category-list", pathMatch: "full" },
            { path: "category-list", component: CategoryListComponent, pathMatch: "full"},
            { path: "category-manage/:id", component: CategoryManageComponent, pathMatch: "full"},
         ]
    },
    { path: 'services',                 component: ServicesComponent,
        children: [
            { path: "", redirectTo: "services-list", pathMatch: "full" },
            { path: "services-list", component: ServicesListComponent, pathMatch: "full"},
            { path: "services-manage/:id", component: ServicesManageComponent, pathMatch: "full"},
        ]
    },


    { path: 'dashboard',      component: DashboardComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

];
