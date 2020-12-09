import { IView } from './view.interface';
import { GIViewerModule } from './gi-viewer/gi-viewer';
// Old Cesium viewer - to be deleted
// import { MobiuscesiumComponent } from './all-viewers/cesium-viewer/mobius-cesium.component';
// import { MobiusCesium } from './all-viewers/cesium-viewer/mobius-cesium';

import { GIViewerComponent } from './gi-viewer/gi-viewer.component';

import { GIGeoViewerComponent } from './gi-geo-viewer/gi-geo-viewer.component';
import { GIGeoViewerModule } from './gi-geo-viewer/gi-geo-viewer';

// Viewer Components array
export const VIEWER_ARR = [
    // Step-1: Add Component here
    GIViewerComponent,
    GIGeoViewerComponent,
    // CytoscapeViewerComponent
];

// Viewer modules array
export const VIEWER_MOD = [
    // Step-2: Add Module here
    GIViewerModule,
    GIGeoViewerModule,
    // CytoscapeViewerModule,
];

// Viewers
export const Viewers: IView[] = [
    // Step-3: Add Viewer Definition here: name, icon and component
    // The order of these views here will influence the order of the view appearing in the viewer header.
    { name: '3D Viewer', icon: undefined, component: GIViewerComponent },
    { name: 'Three Geo Viewer', icon: undefined, component: GIGeoViewerComponent },
];

