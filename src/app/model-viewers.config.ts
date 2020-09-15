import { IView } from './view.interface';
import { GICesiumViewerModule } from './gi-cesium-viewer/gi-cesium-viewer';
import { GICesiumViewerComponent } from './gi-cesium-viewer/gi-cesium-viewer.component';
import { GIViewerModule } from './gi-viewer/gi-viewer';
// Old Cesium viewer - to be deleted
// import { MobiuscesiumComponent } from './all-viewers/cesium-viewer/mobius-cesium.component';
// import { MobiusCesium } from './all-viewers/cesium-viewer/mobius-cesium';

import { GIViewerComponent } from './gi-viewer/gi-viewer.component';

// Viewer Components array
export const VIEWER_ARR = [
    // Step-1: Add Component here
    GIViewerComponent,
    GICesiumViewerComponent,
    // CytoscapeViewerComponent
];

// Viewer modules array
export const VIEWER_MOD = [
    // Step-2: Add Module here
    GIViewerModule,
    GICesiumViewerModule,
    // CytoscapeViewerModule,
];

// Viewers
export const Viewers: IView[] = [
    // Step-3: Add Viewer Definition here: name, icon and component
    // The order of these views here will influence the order of the view appearing in the viewer header.
    { name: '3D Viewer', icon: undefined, component: GIViewerComponent },
    { name: 'Geo Viewer', icon: undefined, component: GICesiumViewerComponent },
];

