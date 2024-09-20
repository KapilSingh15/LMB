import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',        
      },
      {
        label: 'Tracking',
        icon: 'pi pi-star',
        items: [
          {
            label: 'Live',
            icon: 'pi pi-map-marker',
            shortcut: '⌘+S',
          },
          {
            label: 'History',
            icon: 'pi pi-history',
            shortcut: '⌘+B',
          },
          {
            label: 'Route',
            icon: 'pi pi-directions',
            shortcut: '⌘+U',
          },
        ],    

      },
      {
        label: 'Admin',
        icon: 'pi pi-shield',
        items: [
          {
            label: 'Change Password',
            icon: 'pi pi-key',
            shortcut: '⌘+S',
          },
          {
            label: 'Access Wizard',
            icon: 'pi pi-info-circle',
            shortcut: '⌘+B',
          }
        ], 
      },
      {
        label: 'Management',
        icon: 'pi pi-briefcase',
        items: [
          {
            label: 'User Route Assignment',
            icon: 'pi pi-user',
            shortcut: '⌘+S',
          },
          {
            label: 'Student Registration',
            icon: 'pi pi-id-card',
            shortcut: '⌘+B',
          },
          {
            label: 'Vehicle Route Assignment',
            icon: 'pi pi-car',
            shortcut: '⌘+S',
          },
        ], 
      },
      {
        label: 'Master',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'School Master',
            icon: 'pi pi-book',
            shortcut: '⌘+S',
          },
          {
            label: 'Role Master',
            icon: 'pi pi-briefcase',
            shortcut: '⌘+B',
          },
          {
            label: 'Zone Master',
            icon: 'pi pi-database',
            shortcut: '⌘+S',
          },
          {
            label: 'Assets Master',
            icon: 'pi pi-box',
            shortcut: '⌘+S',
          },
          {
            label: 'Stoppage Master',
            icon: 'pi pi-stop',
            shortcut: '⌘+B',
          },
          {
            label: 'User Master',
            icon: 'pi pi-user',
            shortcut: '⌘+S',
          },
          {
            label: 'User Registration',
            icon: 'pi pi-user-plus',
            shortcut: '⌘+S',
          },
          {
            label: 'Geofance ',
            icon: 'pi pi-map-marker',
            shortcut: '⌘+B',
          },
          {
            label: 'Simultion ',
            icon: 'pi pi-play',
            shortcut: '⌘+S',
          },
          {
            label: 'Route Master ',
            icon: 'pi pi-directions',
            shortcut: '⌘+S',
          },
        ], 
      },
    ];
  }
}
