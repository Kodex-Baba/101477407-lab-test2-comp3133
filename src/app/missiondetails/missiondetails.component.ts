import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpacexService } from '../spacex.service';
import { MatCardModule, MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatAnchor, MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-missiondetails',
  imports: [CommonModule,
    RouterLink,
    MatCardModule,
    MatCardHeader,
    MatCard,
    MatCardContent, MatButton, MatIcon, MatAnchor],
  templateUrl: './missiondetails.component.html',
})
export class MissiondetailsComponent implements OnInit {
  mission: any;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private spacex: SpacexService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.spacex.getLaunchByFlightNumber(id).subscribe({
      next: (data) => {
        this.mission = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Mission not found';
        this.loading = false;
      }
    });
  }
}
