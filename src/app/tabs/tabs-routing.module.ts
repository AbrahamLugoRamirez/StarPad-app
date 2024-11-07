import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { TabsPage } from './tabs.page';
import { MajorPadsComponent } from '../major-pads/major-pads.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'pad1', component: MajorPadsComponent },
      {
        path: 'pad2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
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
  { path: 'pad1', component: MajorPadsComponent },
  { path: 'pad2', component: MajorPadsComponent },
  { path: 'pad3', component: MajorPadsComponent },

  {
    path: '',
    redirectTo: '/pad1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
