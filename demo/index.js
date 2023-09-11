const map = L.map('map', {
  crs: L.CRS.EPSG4326,
}).setView([38.38442,-0.5152], 16);

const osm = L.tileLayer('https://osm-{s}.gs.mil/tiles/default_pc/{z}/{x}/{y}.png', {
  subdomains: '1234',
  attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong>',
});
osm.addTo(map);

try {
  L.geoPackageFeatureLayer([], {
    geoPackageUrl: 'https://github.com/josemamira/qfield_cefire/raw/main/qfield/master/especies.gpkg',
    layerName: 'especies',
    style: function(feature) {
      return {
         "color": "#ff7800",
         "weight": 5,
         "opacity": 0.65
      };
    }
  }).addTo(map);
} catch (e) {
  console.error(e);
}
