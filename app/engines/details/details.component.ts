import { Component, OnInit } from "@angular/core";
import { ENGINES } from "../../overview/data";
import { tdRotateAnimation } from '@covalent/core/common';

const ELEMENT_DATA: any[] = ENGINES;

@Component({
  selector: "app-scripts-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [ tdRotateAnimation, ],
})
export class EnginesDetailsComponent implements OnInit {
  toggleList: boolean = true;
  systems = ELEMENT_DATA;
  detailViews: any = [
    { name: "OVERVIEW", link: ["./"] },
    { name: "DATABASES & Labs", link: ["versions"] },
    { name: "DATA SOURCES", link: ["history"] },
    { name: "PERMISSIONS", link: ["permissions"] },
    { name: "LOGS", link: ["schedule"] },
    { name: "Data Recovery", link: ["schedule"] },
    { name: "Configure", link: ["schedule"] }
  ];
  constructor() {}

  ngOnInit() {}
}
