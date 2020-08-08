import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

const poems = require("./sumatiPadyaalu.json");

@Component({
    selector: "sumati-padyalu",
    templateUrl: "./sumati.component.html",
    styleUrls: ["sumati.component.css"],
})
export class SumatiPadyalu implements OnInit {
    poemsList: any;
    constructor(private page: Page) {}

    ngOnInit(): void {
        // getJSON("./src/assets/sumatiPadyaalu.json").then(
        //     (response: any) => {
        //         console.log(response);
        //     },
        //     (e) => {
        //         console.log(e);
        //     }
        // );
        // this.http.get("./src/assets/sumatiPadyaalu.json").subscribe((res) => {
        //     console.log(res);
        //     console.log(JSON.stringify(res));
        // });
        this.poemsList = poems;
        this.page.actionBarHidden = true;
    }
}
