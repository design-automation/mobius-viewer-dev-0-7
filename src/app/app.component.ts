import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { _parameterTypes } from '@assets/core/modules';
import { FileHandle } from './directives/dragDropDirective';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    model = null;
    files: FileHandle[] = [];

    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        this.matIconRegistry.addSvgIcon('printDis', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Print_disabled.svg'));
        this.matIconRegistry.addSvgIcon('print', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/iconPrint.svg'));
        this.matIconRegistry.addSvgIcon('disabled', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/iconDisabled.svg'));
        this.matIconRegistry.addSvgIcon('settings', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Settings.svg'));
        this.matIconRegistry.addSvgIcon('select', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Select.svg'));
        this.matIconRegistry.addSvgIcon('c3D Viewer', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/3D2.svg'));
        this.matIconRegistry.addSvgIcon('cGeo Viewer', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Geo.svg'));
        this.matIconRegistry.addSvgIcon('cCytoscape Viewer', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/cyto.svg'));
        this.matIconRegistry.addSvgIcon('cMobius Cesium', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Geo2.svg'));
        this.matIconRegistry.addSvgIcon('cConsole', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Console.svg'));
        this.matIconRegistry.addSvgIcon('cHelp', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Help.svg'));
        this.matIconRegistry.addSvgIcon('cSummary', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Summary.svg'));
        this.matIconRegistry.addSvgIcon('cZoom', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Zoom.svg'));
        this.matIconRegistry.addSvgIcon('cfv', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Mobius favicon.svg'));
        this.matIconRegistry.addSvgIcon('cMenu', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Three Lines Menu.svg'));
        this.matIconRegistry.addSvgIcon('cGallery', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Home.svg'));
        this.matIconRegistry.addSvgIcon('cDashboard', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Dashboard.svg'));
        this.matIconRegistry.addSvgIcon('cFlowchart', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Flowchart.svg'));
        this.matIconRegistry.addSvgIcon('cEditor', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Node.svg'));
        this.matIconRegistry.addSvgIcon('cAdd', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/add.svg'));
        this.matIconRegistry.addSvgIcon('cRemove', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/remove.svg'));
        this.matIconRegistry.addSvgIcon('cCredits', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/Credits.svg'));
        this.matIconRegistry.addSvgIcon('cUpArrow', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/arrowup.svg'));
        this.matIconRegistry.addSvgIcon('cDnArrow', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/arrowdown.svg'));
        this.matIconRegistry.addSvgIcon('cControlCam', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/ControlCam.svg'));
    }

    async filesDropped(files: FileHandle[]) {
        if (files.length === 0) { return; }
        const f = files[0];
        try {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                this.model = _parameterTypes.newFn();
                this.model.setJSONStr(fileReader.result);
            };
            fileReader.readAsText(f.file, 'json/applications');
        } catch (ex) {
            return;
        }
    }
}
