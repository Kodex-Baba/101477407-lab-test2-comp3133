import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  standalone: true,
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
})
export class MissionfilterComponent implements OnInit {
  @Output() yearSelected = new EventEmitter<string>();

  selectedYear: string = '';
  years: string[] = [];

  ngOnInit() {
    // Populate a list of years (2006 to 2020 – SpaceX launch years)
    this.years = Array.from({ length: 2020 - 2006 + 1 }, (_, i) => (2006 + i).toString()).reverse();
  }

  onYearChange() {
    this.yearSelected.emit(this.selectedYear);
  }
}
