import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { PoemComponent } from "./components/poem/poem.component";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    imports: [NativeScriptFormsModule, NativeScriptCommonModule],
    declarations: [PoemComponent],
    providers: [],
    exports: [PoemComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class SharedModule {}
