import { Component, OnInit } from "@angular/core";
import { OBJECTS } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

const ELEMENT_DATA: any[] = OBJECTS;

@Component({
  selector: "app-objects-scripts-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class ObjectsDetailsComponent implements OnInit {
  toggleList: boolean = true;
  systems = ELEMENT_DATA;
  detailViews: any = [
    { name: "DATA", link: ["./"] },
    { name: "SCHEMA & INDEXES", link: ["code"] },
    { name: "STATS", link: ["history"] },
    { name: "IMPORT / EXPORT", link: ["versions"] },
    { name: "PERMISSIONS", link: ["permissions"] },
    { name: "BACKUPS", link: ["schedule"] }
  ];
  constructor() {}

  ngOnInit() {}
}
