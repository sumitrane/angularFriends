import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'admin-dashboard', title: 'Admin Dashboard',  icon: 'dashboard', class: '' },
    { path: 'users', title: 'User List',  icon:'person', class: '' },
    { path: 'chefs', title: 'Chef List',  icon:'person', class: '' },
    { path: 'category', title: 'Category List',  icon:'list_alt', class: '' },
    { path: 'services', title: 'Services List',  icon:'list_alt', class: '' },
    { path: 'termsandconditions', title: 'Manage Terms & Conditions',  icon:'info', class: '' },
    { path: 'questionnaires', title: 'Manage Questionnaires',  icon:'live_help', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
