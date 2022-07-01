# Embedding Mobius Viewer
Creating a unique url for your Mobius GI models is easy.
You may include an url to the GI model directly in the url link or inject the GI model into the iframe using [postMessage API.](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

For more resources on embedding Mobius: https://mobius.design-automation.net/pages/mobius_for_your_site.html

## Required
The .gi file will need to be a public resource stored in one of the following services:
1. GitHub (raw link)
1. AWS (s3 bucket public url)
1. Dropbox (public url)

## Url
1. Base URL: 
    https://design-automation.github.io/mobius-viewer-dev-0-7/
1. Append `?file=` and the url of a Mobius javascript File.

## Embed
You may include the url in the `src` attribute of an iframe.
For more information: [MDN Web Docs Iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
```
    <iframe 
        width='100%' 
        height='600px' 
        style='border: 1px solid black;' 
        src="">
    </iframe>
```
## postMessage API
* html
```
    <iframe 
        width='100%' 
        height='600px' 
        style='border: 1px solid black;' 
        src="https://design-automation.github.io/mobius-viewer-dev-0-7/">
    </iframe>
```

* javascript
    * Update Model
```
        document.getElementById("mobius-viewer").contentWindow.postMessage(
                {
                    messageType: 'update',
                    model: <GI STRING>
                },
                "*"
            )
```
   
   * Update Settings
    
```
        document.getElementById("mobius-viewer").contentWindow.postMessage(
                {
                    messageType: 'update_settings',
                    GI_settings: {...},
                    Geo_settings: {...}
                }
            )
```
### Using Mobius Javascript and postMessage API to update model
1. import the mobius javascript file
    * `import `Model` from './path/to/mobiusscript.js'`
1. import mobius modules
    * `import * as Modules from './path/to/mobius/core/modules'`
1. call the javascript function to generate model (promise), then inject the return result to iframe using `postMessage`
```
Model(
        Modules,
        ...parameters
    ).then(
        result => {
        document.getElementById("mobius-viewer").contentWindow.postMessage(
            {
                messageType: 'update',
                model: result.model.getJSONStr()
            }, '*');
    })
```
### GI Viewer Settings
format: `Object`
* `key` : `value type` (`Object` if another indent)

    * normals
        * show: boolean
        * size: number
    * axes
        * show: boolean
        * size: number
    * grid
        * show: true
        * size: number
        * pos_x: number
        * pos_y: number
        * pos_z: number
        * pos:
            * x: !number
            * y: !number
            * z: !number
    * background:
        * show: boolean
        * background_set: 0
    * positions:
        * show: boolean
        * size: number
    * tjs_summary
        * show: boolean
    * gi_summary
        * show: boolean
    * wireframe
        * show: boolean
    * camera
        * pos
            * x: !number
            * y: !number
            * z: !number
        * target
            * x: !number
            * y: !number
            * z: !number
        * ortho: boolean
    * colors:
        * viewer_bg: hex_color_string
        * position: hex_color_string
        * position_s: hex_color_string
        * vertex_s: hex_color_string
        * face_f: hex_color_string
        * face_f_s: hex_color_string
        * face_b: hex_color_string
        * face_b_s: hex_color_string
    * ambient_light
        * show: boolean
        * color: hex_color_string
        * intensity: number
    * hemisphere_light
        * show: boolean
        * helper: boolean
        * skyColor: hex_color_string
        * ground_color: hex_color_string
        * intensity: number
    * directional_light
        * show: boolean
        * helper: boolean
        * color: hex_color_string
        * intensity: number
        * shadow: boolean
        * azimuth: number
        * altitude: number
        * distance: number
        * shadowSize: number
    * ground
        * show: boolean
        * width: number
        * length: number
        * height: number
        * color: hex_color_string
        * shininess: number
    * select
        * selector:
            * id: number
            * name: String
        * tab: String
        * enabledselector:
            * ps: boolean
            * _v: boolean
            * _e: boolean
            * _w: boolean
            * _f: boolean
            * pt: boolean
            * pl: boolean
            * pg: boolean
            * co: boolean


### Geo Viewer Settings
format: `Object`
* `key` : `value type` (`Object` if another indent)

Base GeoViewer setting:
    {
        "imagery": {
            "layer": "Open Street Map",
            "terrain": "Ellipsoid",
            "apiKey": {
                "here": <apikey>
            }
        },
        ...additionalSettings
    }

Additional Settings:
* camera
    * pos:
        * x: !number
        * y: !number
        * z: !number
    * direction:
        * x: !number
        * y: !number
        * z: !number
    * up:
        * x: !number
        * y: !number
        * z: !number
    * right:
        * x: !number
        * y: !number
        * z: !number
* time
    * date: "YYYY-MM-DDTHH:MM" [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations)
* model: 
    polygonEdge: boolean
* updated: boolean
