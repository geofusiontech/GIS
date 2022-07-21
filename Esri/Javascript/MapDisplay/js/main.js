require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer","esri/widgets/Legend","esri/widgets/Expand"], function (esriConfig,Map, MapView,FeatureLayer,Legend,Expand) {

    esriConfig.apiKey = "YOUR_API_KEY";

const template = {
title:"{NAME}",
lastEditInfoEnabled:false,
content: [
  {
    type:"fields",
    fieldInfos:
    [
      {
      fieldname:"POP2007",
      label:"Population in 2007"
    }
  ]  
}]
};

const f1= new FeatureLayer(
  {
    url:"https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/2",
    popupTemplate: template
  }
);
    const map = new Map({
      basemap: "arcgis-topographic", // Basemap layer service
      layers:[f1]
    });

    const view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom:2, // Zoom level
      container: "viewDiv" // Div element
    });
const legend = new Legend(
  {
  view:view,
  container:"legendDiv"
  }
);
const expand = new Expand(
  {
    view:view,
    content:legend
  }
);
view.ui.add(expand,"top-right");
  });