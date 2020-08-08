import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    title = "శతకాలు";

    constructor(private itemService: ItemService, private page: Page) {}

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
