/* tslint:disable */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IgxButtonModule, IgxDropDownModule, IgxIconModule, IgxRippleModule, IgxToggleModule } from "igniteui-angular";
import { IgxOverlaysModule } from "igniteui-angular-charts";

@NgModule({
    // declarations: [
    //     IgxDropDownComponent,
    //     IgxIconComponent
    // ],
    imports: [
        CommonModule,
        IgxOverlaysModule,
        FormsModule,
        IgxToggleModule,
        IgxDropDownModule,
        IgxRippleModule,
        IgxButtonModule,
        IgxIconModule
    ]
})
export class UtilsMenuModule { }
