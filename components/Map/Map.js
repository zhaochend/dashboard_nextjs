import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import georaster from 'georaster';
import GeoRasterLayer from 'georaster-layer-for-leaflet';


export default function MapComponent() {
  return (
    <MapContainer 
      center={[20, 90]} 
      zoom={5} 
      style={{ height: "400px", width: "100%" }} 
      id="map_container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <GeoJSONLayer />
      <GeoTIFFLayer />
      <InfoControl />
      <LegendControl />
      <ZoomControl /> {/* Add custom zoom control */}
    </MapContainer>
  );
}

// GeoJSON Layer Component
function GeoJSONLayer() {
  const map = useMap();
  const infoRef = useRef(null); // Create a ref to store the info control
  const highlightRef = useRef(null); // Create a ref to store the highlighted layer

  useEffect(() => {
    // Initialize info control and add to map
    const info = L.control({ position: 'topright' });

    info.onAdd = function () {
      this._div = L.DomUtil.create('div', 'info');
      this.update();
      return this._div;
    };

    info.update = function (content) {
      // this._div.innerHTML = '<h4>Country</h4>' + (content ? content : '');
    };

    info.addTo(map);
    infoRef.current = info; // Store the info control in the ref
    
    // Define the highlight style
    const highlightStyle = {
      weight: 3,
      color: '#ff0000',
      dashArray: '',
      fillOpacity: 0.7
    };

    // Define the default style
    const defaultStyle = {
      fillColor: 'transparent',
      color: '#3388ff',
      weight: 2,
      opacity: 1,
    };

    fetch('/data/SEApIndia.geojson')
      .then(response => response.json())
      .then(data => {
        const geojsonLayer = L.geoJSON(data, {
          style: defaultStyle,
          onEachFeature: function(feature, layer) {
            layer.on('mouseover', function(e) {
              // Update info control with feature details
              infoRef.current.update('<b>' + feature.properties.name + '</b><br>' + feature.properties.region);

              // Highlight the feature
              layer.setStyle(highlightStyle);
              highlightRef.current = layer;
            });

            layer.on('mouseout', function(e) {
              // Reset the info control
              if (infoRef.current) {
                infoRef.current.update();
              }

              // Reset the feature style
              if (highlightRef.current) {
                highlightRef.current.setStyle(defaultStyle);
                highlightRef.current = null;
              }
            });
          }
        }).addTo(map);
      })
      .catch(error => console.error('Error loading GeoJSON:', error));
  }, [map]);

  return null;
}

// GeoTIFF Layer Component
function GeoTIFFLayer() {
  const map = useMap();
  
  useEffect(() => {
    fetch("/data/croparea_month6.tif")
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => georaster(arrayBuffer))
      .then(georaster => {
        const layer = new GeoRasterLayer({
          georaster: georaster,
          opacity: 0.7,
          pixelValuesToColorFn: values => {
            const pixelValue = values[0];
            if (pixelValue === 0 || isNaN(pixelValue)) {
              return null;
            }
            return getColor(pixelValue);
          },
          resolution: 64
        });
        layer.addTo(map);
        map.fitBounds(layer.getBounds());
      });
  }, [map]);

  return null;
}

// Info Control Component
function InfoControl() {
  const map = useMap();
  const infoRef = useRef(null);

  useEffect(() => {
    const info = L.control();

    info.onAdd = function () {
      this._div = L.DomUtil.create('div', 'info');
      this.update();
      return this._div;
    };

    info.update = function (content) {
      // this._div.innerHTML = '<h4>Crop Area Data</h4>' + (content ? content : '');
    };

    info.addTo(map);
    infoRef.current = info;
  }, [map]);

  return null;
}

// Legend Control Component
function LegendControl() {
  const map = useMap();
  const legendRef = useRef(null);

  useEffect(() => {
    if (legendRef.current) {
      // If the legend already exists, remove it before adding a new one
      legendRef.current.remove();
    }

    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0, 50, 100, 200, 500, 1000];
      let labels = [];

      div.innerHTML = '<strong>Rice Planting Area (ha)</strong><br>';

      for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '; width: 18px; height: 18px; display: inline-block; margin-right: 8px;"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }

      return div;
    };

    legend.addTo(map);
    legendRef.current = legend;
    
    return () => {
      // Clean up the legend when the component unmounts or re-renders
      if (legendRef.current) {
        legendRef.current.remove();
      }
    };
  }, [map]);

  return null;
}

// Zoom Control Component
function ZoomControl() {
  const map = useMap();

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const zoomChange = e.deltaY < 0 ? 1 : -1;
        const newZoom = map.getZoom() + zoomChange;
        map.setZoom(Math.min(Math.max(newZoom, map.getMinZoom()), map.getMaxZoom()));
      }
    };

    map.getContainer().addEventListener('wheel', handleWheel,{ passive: false });

    return () => {
      map.getContainer().removeEventListener('wheel', handleWheel);
    };
  }, [map]);

  return null;
}

// Function to generate color based on value
function getColor(value) {
  // return value > 1000 ? '#00441b' :
  //        value > 500  ? '#006d2c' :
  //        value > 200  ? '#238b45' :
  //        value > 100  ? '#41ab5d' :
  //        value > 50   ? '#74c476' :
  //        value > 10   ? '#a1d99b' :
  //        value > 0    ? '#c7e9c0' :
  //                       '#e5f5e0';
  return value > 1000 ? '#b30000' :  // Dark yellow-orange
         value > 500  ? '#d95f0e' :  // Medium yellow-orange
         value > 200  ? '#fdae61' :  // Light yellow-orange
         value > 100  ? '#fdd0a2' :  // Very light yellow
         value > 50   ? '#fee5b6' :  // Pale yellow
         value > 0    ? '#ffffb2' :  // Almost white
                        '#ffffff';  // White
}
