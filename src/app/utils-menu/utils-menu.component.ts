import { Component, Output, ViewChild, EventEmitter } from "@angular/core";
import { DisplayDensity, IgxOverlayOutletDirective, ISelectionEventArgs } from "igniteui-angular";

@Component({
    selector: "app-utils-menu",
    templateUrl: "./utils-menu.component.html",
    styleUrls:  ["./utils-menu.component.scss"]
})
export class UtilsMenuComponent {
    public darkTheme = false;
    public densityOptions = [DisplayDensity.compact, DisplayDensity.cosy, DisplayDensity.comfortable];
    public displayDensity = DisplayDensity.comfortable;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @Output()
    public themeChange = new EventEmitter<boolean>();

    @Output()
    public displayDensityChange = new EventEmitter<DisplayDensity>();

    public toggleTheme() {
      this.themeChange.emit(!this.darkTheme);
      this.darkTheme = !this.darkTheme;  
    }

    public onSelection(event: ISelectionEventArgs) {
        this.displayDensity = event.newSelection.value;
        this.displayDensityChange.emit(event.newSelection.value);
    }
}
