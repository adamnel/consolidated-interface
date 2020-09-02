import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { ENGINES } from "../../overview/data";

export interface Engine {
  name: string;
  description: string;
  platform: string;
  system: string;
  status: string;
  purpose: string;
  plan: string;
  usage: string;
}

const ELEMENT_DATA: any[] = ENGINES;

@Component({
  selector: "app-engines-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class EnginesListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["name", "status", "platform", "purpose", "plan", "usage"];

  dataSource = new MatTableDataSource<Engine>(ELEMENT_DATA);
  selection = new SelectionModel<Engine>(true, []);

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
