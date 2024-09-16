
let Yield_Yearly_Country; // Declare in the global scope
let SPI1_Yearly_Country; // Declare in the global scope
let SPI3_Yearly_Country;
let SPI6_Yearly_Country;
let SPI12_Yearly_Country;
// let SPI12_yearly_prov_vie;
let SPI1_yearly_grid_lao;

// const georaster = window.GeoRaster;
// Define the URLs for the JSON files
const urls = [
    '/data/yield_country.geojson',
    '/data/SPI1_yearly_country_1950_2016.geojson',
    '/data/SPI3_yearly_country_1950_2016.geojson',
    '/data/SPI6_yearly_country_1950_2016.geojson',
    '/data/SPI12_yearly_country_1950_2016.geojson',
    // '/data/SPI12_yearly_Vietnam_prov_1950_2016.geojson'
];

// Use Promise.all to fetch all data in parallel
Promise.all(urls.map(url => 
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
))
.then(dataArray => {
    // Data is an array with the results in the same order as the URLs
    Yield_Yearly_Country = dataArray[0];
    SPI1_Yearly_Country = dataArray[1];
    SPI3_Yearly_Country = dataArray[2];
    SPI6_Yearly_Country = dataArray[3];
    SPI12_Yearly_Country = dataArray[4];
    // SPI12_yearly_prov_vie = dataArray[5];

    // Process your data here
    console.log(Yield_Yearly_Country);
    // console.log('spi data',SPI1_Yearly_Country);
})
.catch(error => {
    console.error('Error fetching the JSON files:', error);
});


const tiffUrls = [
    '/data/grid_tif/SPI/SPI1_yearly_0.250deg_1950_2016_Laos.tif',
    '/data/grid_tif/SPI/SPI1_yearly_0.250deg_1950_2016_Cambodia.tif',
    '/data/grid_tif/SPI/SPI1_yearly_0.250deg_1950_2016_Myanmar.tif',
    '/data/grid_tif/SPI/SPI1_yearly_0.250deg_1950_2016_Thailand.tif',
    '/data/grid_tif/SPI/SPI1_yearly_0.250deg_1950_2016_Vietnam.tif',
    '/data/grid_tif/SPI/SPI3_yearly_0.250deg_1950_2016_Laos.tif',
    '/data/grid_tif/SPI/SPI3_yearly_0.250deg_1950_2016_Cambodia.tif',
    '/data/grid_tif/SPI/SPI3_yearly_0.250deg_1950_2016_Myanmar.tif',
    '/data/grid_tif/SPI/SPI3_yearly_0.250deg_1950_2016_Thailand.tif',
    '/data/grid_tif/SPI/SPI3_yearly_0.250deg_1950_2016_Vietnam.tif',
    '/data/grid_tif/SPI/SPI6_yearly_0.250deg_1950_2016_Laos.tif',
    '/data/grid_tif/SPI/SPI6_yearly_0.250deg_1950_2016_Cambodia.tif',
    '/data/grid_tif/SPI/SPI6_yearly_0.250deg_1950_2016_Myanmar.tif',
    '/data/grid_tif/SPI/SPI6_yearly_0.250deg_1950_2016_Thailand.tif',
    '/data/grid_tif/SPI/SPI6_yearly_0.250deg_1950_2016_Vietnam.tif',
    '/data/grid_tif/SPI/SPI12_yearly_0.250deg_1950_2016_Laos.tif',
    '/data/grid_tif/SPI/SPI12_yearly_0.250deg_1950_2016_Cambodia.tif',
    '/data/grid_tif/SPI/SPI12_yearly_0.250deg_1950_2016_Myanmar.tif',
    '/data/grid_tif/SPI/SPI12_yearly_0.250deg_1950_2016_Thailand.tif',
    '/data/grid_tif/SPI/SPI12_yearly_0.250deg_1950_2016_Vietnam.tif',

]

Promise.all(tiffUrls.map(url => 
    fetch(url)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => parseGeoraster(arrayBuffer))
))
    .then(georasterArray => {
        // console.log("GeoRaster:", georasterArray[0]);
        SPI1_yearly_grid_lao = georasterArray[0]
        SPI1_yearly_grid_cam = georasterArray[1]
        SPI1_yearly_grid_mya = georasterArray[2]
        SPI1_yearly_grid_tha = georasterArray[3]
        SPI1_yearly_grid_vie = georasterArray[4]
        SPI3_yearly_grid_lao = georasterArray[5]
        SPI3_yearly_grid_cam = georasterArray[6]
        SPI3_yearly_grid_mya = georasterArray[7]
        SPI3_yearly_grid_tha = georasterArray[8]
        SPI3_yearly_grid_vie = georasterArray[9]
        SPI6_yearly_grid_lao = georasterArray[10]
        SPI6_yearly_grid_cam = georasterArray[11]
        SPI6_yearly_grid_mya = georasterArray[12]
        SPI6_yearly_grid_tha = georasterArray[13]
        SPI6_yearly_grid_vie = georasterArray[14]
        SPI12_yearly_grid_lao = georasterArray[15]
        SPI12_yearly_grid_cam = georasterArray[16]
        SPI12_yearly_grid_mya = georasterArray[17]
        SPI12_yearly_grid_tha = georasterArray[18]
        SPI12_yearly_grid_vie = georasterArray[19]
        
    })
    .catch(err => {
        console.error("Error loading GeoTIFF:", err);
        return null; // Return null if there's an error
    })

// fetch(tiffUrl)
//     .then(response => response.arrayBuffer())
//     .then(arrayBuffer => parseGeoraster(arrayBuffer))
//     .then(georaster => {
//         console.log("GeoRaster:", georaster);
//         SPI1_yearly_grid_lao = georaster
//         // Number of bands in the GeoTIFF
//         console.log("Number of Bands:", georaster.numberOfRasters);

//         // Access specific raster bands if needed
//         const firstBand = georaster.values[0]; // Access the first band
//         // console.log("First Band Data:", firstBand);
        
//         // Example of accessing data from the first pixel in the first band
//         // console.log("First Pixel Value of First Band:", firstBand[0][0]);
//     })
//     .catch(err => {
//         console.error("Error loading GeoTIFF:", err);
//     });

