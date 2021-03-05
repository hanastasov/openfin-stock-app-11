import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import {
    IgxButtonModule, IgxIconModule, IgxInputGroupModule,
    IgxLayoutModule, IgxRippleModule,   IgxSwitchModule,

    IgxNavbarModule, IgxListModule,
    IgxNavigationDrawerModule,
} from "igniteui-angular";
import { IgxGridModule } from "igniteui-angular";

import { GridPositionsComponent } from "./grid-positions.component";
import { UtilsMenuModule } from "../../utils-menu/utils-menu.module";
import { UtilsMenuComponent } from "../../utils-menu/utils-menu.component";

@NgModule({
    declarations: [
        GridPositionsComponent,
        UtilsMenuComponent
    ],
    imports: [
        CommonModule,
        FormsModule,

        UtilsMenuModule,

        IgxGridModule,

        IgxButtonModule,
        IgxRippleModule,
        IgxIconModule,
        IgxLayoutModule,
        IgxInputGroupModule,
        IgxSwitchModule,
        IgxListModule,
        IgxNavbarModule,
        IgxNavigationDrawerModule,
    ],
})
export class GridPositionsModule { }
