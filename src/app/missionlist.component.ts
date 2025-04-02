import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexService } from './spacex.service';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import {RouterLink} from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-missionlist',
  imports: [CommonModule,
    MissionfilterComponent,
    RouterLink,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];
  loading = true;
  error = '';

  constructor(private spacex: SpacexService) {}

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    this.loading = true;
    this.spacex.getAllLaunches().subscribe({
      next: (data) => {
        this.launches = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load missions';
        this.loading = false;
      }
    });
  }

  filterByYear(year: string) {
    if (!year) {
      this.fetchAll();
      return;
    }

    this.spacex.getLaunchesByYear(year).subscribe({
      next: (data) => this.launches = data,
      error: () => this.error = 'Failed to filter by year',
    });
  }
}
