import { Component, OnInit } from "@angular/core";
import { SCRIPTS } from "../_data/data";

const ELEMENT_DATA: any[] = SCRIPTS;

@Component({
  selector: "app-settings-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class SettingsDetailsComponent implements OnInit {
  systems = ELEMENT_DATA;
  detailViews: any = [
    { name: "DETAILS", link: ["./"] },
    { name: "CODE", link: ["code"] },
    { name: "HISTORY", link: ["history"] },
    { name: "VERSIONS", link: ["versions"] },
    { name: "PERMISSIONS", link: ["permissions"] },
    { name: "SCHEDULE", link: ["schedule"] }
  ];
  constructor() {}

  ngOnInit() {}
}
