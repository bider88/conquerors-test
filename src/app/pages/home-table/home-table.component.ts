import { CivilizationElementInterface } from './../../models/civilization-element.interface';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ConquerorService } from '../services/conqueror.service';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    'id', 'name', 'expansion', 'army_type', 'unique_unit', 'unique_tech', 'team_bonus'
  ];
  civilization: CivilizationElementInterface[] = [];

  constructor(
    private conquerorService: ConquerorService
  ) { }

  ngOnInit() {
    this.getConquerors();
  }

  getConquerors(): void {
    this.conquerorService.getConquerors().subscribe(
      res => {
        this.civilization = res;
        console.log(this.civilization);
      }
    );
  }
}
