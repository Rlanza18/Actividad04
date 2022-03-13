ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32616").setExtent([387068.138066, 1629208.000733, 431851.030423, 1650344.584779]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UsodesueloPANACAM_1 = new ol.format.GeoJSON();
var features_UsodesueloPANACAM_1 = format_UsodesueloPANACAM_1.readFeatures(json_UsodesueloPANACAM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_UsodesueloPANACAM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsodesueloPANACAM_1.addFeatures(features_UsodesueloPANACAM_1);
var lyr_UsodesueloPANACAM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UsodesueloPANACAM_1, 
                style: style_UsodesueloPANACAM_1,
                interactive: true,
    title: 'Uso de suelo PANACAM<br />\
    <img src="styles/legend/UsodesueloPANACAM_1_0.png" /> AGROPECUARIO<br />\
    <img src="styles/legend/UsodesueloPANACAM_1_1.png" /> BOSQUE LATIFOLIADO<br />\
    <img src="styles/legend/UsodesueloPANACAM_1_2.png" /> BOSQUE MIXTO<br />\
    <img src="styles/legend/UsodesueloPANACAM_1_3.png" /> BOSQUE PINAR DENSO<br />\
    <img src="styles/legend/UsodesueloPANACAM_1_4.png" /> BOSQUE PINAR RALO<br />\
    <img src="styles/legend/UsodesueloPANACAM_1_5.png" /> CUERPOS DE AGUA<br />\
    <img src="styles/legend/UsodesueloPANACAM_1_6.png" /> MATORRALES<br />'
        });
var format_PANACAM_2 = new ol.format.GeoJSON();
var features_PANACAM_2 = format_PANACAM_2.readFeatures(json_PANACAM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_PANACAM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PANACAM_2.addFeatures(features_PANACAM_2);
var lyr_PANACAM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PANACAM_2, 
                style: style_PANACAM_2,
                interactive: true,
                title: '<img src="styles/legend/PANACAM_2.png" /> PANACAM'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_UsodesueloPANACAM_1.setVisible(true);lyr_PANACAM_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_UsodesueloPANACAM_1,lyr_PANACAM_2];
lyr_UsodesueloPANACAM_1.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'COBERTURA': 'COBERTURA', 'TIPO_': 'TIPO_', 'Area': 'Area', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PANACAM_2.set('fieldAliases', {'nombre': 'nombre', 'categoria': 'categoria', 'inst_legal': 'inst_legal', 'zona': 'zona', 'sub_zona': 'sub_zona', 'sector': 'sector', 'área_ha': 'área_ha', });
lyr_UsodesueloPANACAM_1.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', 'COBERTURA': 'TextEdit', 'TIPO_': 'TextEdit', 'Area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PANACAM_2.set('fieldImages', {'nombre': 'TextEdit', 'categoria': 'TextEdit', 'inst_legal': 'TextEdit', 'zona': 'TextEdit', 'sub_zona': 'TextEdit', 'sector': 'TextEdit', 'área_ha': 'TextEdit', });
lyr_UsodesueloPANACAM_1.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', 'COBERTURA': 'inline label', 'TIPO_': 'inline label', 'Area': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PANACAM_2.set('fieldLabels', {'nombre': 'inline label', 'categoria': 'no label', 'inst_legal': 'no label', 'zona': 'inline label', 'sub_zona': 'no label', 'sector': 'no label', 'área_ha': 'no label', });
lyr_PANACAM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});