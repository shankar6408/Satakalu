import { Component, OnInit, Input } from "@angular/core";

export interface Poem {
    words: Array<PoemWord>;
    Meaning: string;
}

export interface PoemWord {
    word: string;
    meaning: string;
    grammarlinks: Array<string>;
}

@Component({
    selector: "ns-poem",
    templateUrl: "./poem.component.html",
    styleUrls: ["./poem.component.css"],
})
export class PoemComponent implements OnInit {
    @Input() poem: Poem;
    selectedWord: PoemWord;
    constructor() {}

    ngOnInit(): void {}

    onTappingGrammarLink(link: string) {
        console.log(link);
    }
}
