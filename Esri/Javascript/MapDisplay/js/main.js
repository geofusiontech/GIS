require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer",
"esri/widgets/Legend","esri/widgets/Expand","esri/widgets/LayerList","esri/widgets/BasemapGallery"],
 function (esriConfig,Map, MapView,FeatureLayer,Legend,Expand,LayerList,BasemapGallery) {
 

    esriConfig.apiKey = "AAPKba619c401489402e96dc48533988f8edqqOqoPJYEvvCY__D_1P7Ziw1gon01FuUsXOhMuBNElF1YeLWEF_y1BmYj1dzw1r9";

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
      basemap: "gray-vector", // Basemap layer service
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
const layerList = new LayerList({
  container: document.createElement("div"),
  view: view
});

const basemapGallery = new BasemapGallery(
  {
      view: view
  }
);

layerListExpand = new Expand({
  expandIconClass: "esri-icon-layer-list",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
  // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
  view: view,
  content: layerList
});

const bgExpand = new Expand({
  view: view,
  content: basemapGallery
});


view.ui.add(expand,"top-right");
view.ui.add(layerListExpand,"top-left");
view.ui.add(bgExpand,"top-left");
  });


