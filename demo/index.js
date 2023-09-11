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
    geoPackageUrl: 'https://josemamira.github.io/qfield_cefire/qfield/master/especies.gpkg',
    layerName: 'especies',
    style: function(feature) {
      return {
        radius: 8,
				fillColor: '#ff7800',
				color: '#000',
				weight: 1,
				opacity: 1,
				fillOpacity: 0.8
          /*
         "color": "#ff7800",
         "weight": 5,
         "opacity": 0.65*/
      };
    }
  }).addTo(map);
} catch (e) {
  console.error(e);
}
