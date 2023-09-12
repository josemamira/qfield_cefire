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
	fillColor: '#00FF00',
	color: '#000',
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
      };
    },

    // https://jsfiddle.net/rususorinvick/9ajqhyb3/
    onEachFeature: function (feature, layer) {
		console.log(feature.properties);
		
		var nombre;
		if (feature.properties.id_especie == 1) { nombre = 'Palmera helecho';}
		else if (feature.properties.id_especie == 2) { nombre = 'Palmera mexicana';}
		else if (feature.properties.id_especie == 3) { nombre = 'Ciprés común';}
		else if (feature.properties.id_especie == 4) { nombre = 'Olivo';}
		else if (feature.properties.id_especie == 5) { nombre = 'Palo borracho';}
		else if (feature.properties.id_especie == 6) { nombre = 'Laurel de indias';}
		else if (feature.properties.id_especie == 7) { nombre = 'Plátano de sombra';}
		else if (feature.properties.id_especie == 8) { nombre = 'Jacaranda';}
		else if (feature.properties.id_especie == 9) { nombre = 'Almez. Llidoner';}
		else if (feature.properties.id_especie == 10) { nombre = 'Árbol del amor';}
		else if (feature.properties.id_especie == 11) { nombre = 'Pie de elefante';}
		else if (feature.properties.id_especie == 12) { nombre = 'Candelabro';}
		else if (feature.properties.id_especie == 13) { nombre = 'Aloe vera';}
		else if (feature.properties.id_especie == 14) { nombre = 'Cuello de cisne';}
		else if (feature.properties.id_especie == 15) { nombre = 'Cactus barril. Asiento de la suegra';}
		else if (feature.properties.id_especie == 16) { nombre = 'Drago de canarias';}
		else if (feature.properties.id_especie == 17) { nombre = 'Palmito. Margalló';}
		else if (feature.properties.id_especie == 18) { nombre = 'Falsa platanera';}
		else if (feature.properties.id_especie == 19) { nombre = 'Kentia. Palmera rizada';}
		else if (feature.properties.id_especie == 20) { nombre = 'Encina. Carrasca';}
		else if (feature.properties.id_especie == 21) { nombre = 'Buganvilla';}
		else if (feature.properties.id_especie == 22) { nombre = 'Eucalipto blanco';}
		else if (feature.properties.id_especie == 23) { nombre = 'Higuera australiana';}
		else if (feature.properties.id_especie == 24) { nombre = 'Pino de pisos';}
		else if (feature.properties.id_especie == 25) { nombre = 'Quejigo';}
		else if (feature.properties.id_especie == 26) { nombre = 'Morera';}
		else if (feature.properties.id_especie == 27) { nombre = 'Tomillo';}
		else if (feature.properties.id_especie == 28) { nombre = 'Romero';}
		else { nombre = 'Desconocido';}
		
		var img = '<img width="300" src=https://raw.githubusercontent.com/josemamira/qfield_cefire/master/qfield/master/'+ feature.properties.foto + '>';

		var string = '<span class="labelTitle"><center><strong>'+nombre+'</strong></center></span><br>'+
					 '<div class="item">' + img + '</div>';
		/*string += nombre;
		for (var key in feature.properties) {
			console.log(feature.properties.foto);
			string += nombre+'<div class="item"><span class="label">' + key + ': </span><span class="value">' + feature.properties[key] + '</span></div>';
        }*/
        layer.bindPopup(string);
	  
  }).addTo(map);
} catch (e) {
  console.error(e);
}
