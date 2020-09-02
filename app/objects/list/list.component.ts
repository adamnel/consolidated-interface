import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { OBJECTS } from "../../overview/data";

export interface Objects {
  DataBaseName: string;
  TableName: string;
  TableKind: string;
}

const ELEMENT_DATA: any[] = OBJECTS;

@Component({
  selector: "app-objects-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ObjectsListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  get selectedRowNum() {
    return this.selection.selected.length;
  }

  displayedColumns: string[] = ["DataBaseName", "TableName", "TableKind"];

  dataSource = new MatTableDataSource<Objects>(ELEMENT_DATA);
  selection = new SelectionModel<Objects>(true, []);

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
