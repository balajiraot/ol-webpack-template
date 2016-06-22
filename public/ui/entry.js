
'use strict'
const ol = require('openlayers')


const map = new ol.Map({
  target:'map',
  layers:[
    new ol.layer.Tile({
        title:'Global Imagery',
        source:new ol.source.TileWMS({
          url:'http://demo.opengeo.org/geoserver/wms',
          params: {LAYERS: 'nasa:bluemarble', VERSION: '1.1.1'}
        })
    })
  ],
  view:new ol.View({
    projection: 'EPSG:4326',
    center: [0, 0],
    zoom: 0,
    maxResolution: 0.703125
  })
})

