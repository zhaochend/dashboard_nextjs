import { useEffect } from 'react';
import georaster from 'georaster';
import GeoRasterLayer from 'georaster-layer-for-leaflet';

export default function Loadtiff() {
  let SPI1_yearly_grid_cam; // Declare the variable to hold the TIFF data

  useEffect(() => {
    const tiffUrl = '/data/grid_tif/SPI/SPI1_yearly_0.250deg_1950_2016_Cambodia.tif';

    const fetchGeoTIFF = async () => {
      try {
        const response = await fetch(tiffUrl);
        const arrayBuffer = await response.arrayBuffer();
        const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
        const image = await tiff.getImage();
        const rasters = await image.readRasters();
        
        // Assign raster data to the global variable
        SPI1_yearly_grid_cam = rasters;
        console.log('SPI1_yearly_grid_cam:', SPI1_yearly_grid_cam); // Log the loaded data
      } catch (error) {
        console.error('Error loading GeoTIFF:', error);
      }
    };

    fetchGeoTIFF();
  }, []); // Empty dependency array ensures this only runs once when the component mounts

}