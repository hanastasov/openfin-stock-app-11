/* tslint:disable */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IgxGridModule } from "igniteui-angular";

import { GridRoutingModule } from "./grid-routing.module";
import { GridInstrumentsModule } from "./grid-instruments/grid-instruments.module";
import { GridPositionsModule } from "./grid-positions/grid-positions.module";
import { UtilsMenuModule } from "../utils-menu/utils-menu.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        GridRoutingModule,
        GridInstrumentsModule,
        GridPositionsModule,

        UtilsMenuModule,

        IgxGridModule
    ],
})
export class GridModule { }
