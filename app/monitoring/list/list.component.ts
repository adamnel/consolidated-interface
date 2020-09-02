import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { REPORTS } from "../../overview/data";

export interface Script {
  name: string;
  description: string;
  sql: string;
  system: string;
  status: string;
}

const ELEMENT_DATA: any[] = REPORTS;

@Component({
  selector: "app-monitoring-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class MonitoringListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["name", "description"];

  dataSource = new MatTableDataSource<Script>(ELEMENT_DATA);
  selection = new SelectionModel<Script>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  clearAllSelections() {
    this.selection.clear();
  }
}