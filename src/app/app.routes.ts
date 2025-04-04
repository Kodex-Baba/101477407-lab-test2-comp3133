import { Routes } from '@angular/router';
import { MissionlistComponent} from './missionlist.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', component: MissionlistComponent },
  {
    path: 'mission/:id',
    loadComponent: () => import('./missiondetails/missiondetails.component').then(m => m.MissiondetailsComponent),
    data: { renderMode: 'client' }  // optional coz SSR is disabled
  }


];
