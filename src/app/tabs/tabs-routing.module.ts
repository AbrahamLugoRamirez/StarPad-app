import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { MajorPadsComponent } from '../major-pads/major-pads.component';
import { MinorPadsComponent } from '../minor-pads/minor-pads.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'pad1', component: MajorPadsComponent },
      {
        path: 'pad2',
        component: MinorPadsComponent,
      },
      {
        path: 'pad3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: '',
        redirectTo: '/pad1',
        pathMatch: 'full',
      },
    ],
  },
  { path: 'pad1', redirectTo: '/pad1', pathMatch: 'full' },
  { path: 'pad2', redirectTo: '/pad2', pathMatch: 'full' },
  { path: 'pad3', redirectTo: '/pad3', pathMatch: 'full' },
  {
    path: '',
    redirectTo: '/pad1',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/pad1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
