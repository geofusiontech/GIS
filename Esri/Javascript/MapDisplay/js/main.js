require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function (esriConfig,Map, MapView,FeatureLayer) {

    esriConfig.apiKey = "YOUR_API_KEY";
const f1= new FeatureLayer(
  {
    url:"https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/3"
  }
);
    const map = new Map({
      basemap: "arcgis-topographic", // Basemap layer service
      layers:[f1]
    });

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
    });

  });