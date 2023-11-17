var wms_layers = [];

var format_gadm41_USA_shpgadm41_USA_2shp_0 = new ol.format.GeoJSON();
var features_gadm41_USA_shpgadm41_USA_2shp_0 = format_gadm41_USA_shpgadm41_USA_2shp_0.readFeatures(json_gadm41_USA_shpgadm41_USA_2shp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_USA_shpgadm41_USA_2shp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_USA_shpgadm41_USA_2shp_0.addFeatures(features_gadm41_USA_shpgadm41_USA_2shp_0);
var lyr_gadm41_USA_shpgadm41_USA_2shp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm41_USA_shpgadm41_USA_2shp_0, 
                style: style_gadm41_USA_shpgadm41_USA_2shp_0,
                interactive: true,
    title: 'gadm41_USA_shp — gadm41_USA_2.shp<br />\
    <img src="styles/legend/gadm41_USA_shpgadm41_USA_2shp_0_0.png" /> De Baca<br />\
    <img src="styles/legend/gadm41_USA_shpgadm41_USA_2shp_0_1.png" /> La Porte<br />\
    <img src="styles/legend/gadm41_USA_shpgadm41_USA_2shp_0_2.png" /> Leonard Wood<br />\
    <img src="styles/legend/gadm41_USA_shpgadm41_USA_2shp_0_3.png" /> McKean<br />\
    <img src="styles/legend/gadm41_USA_shpgadm41_USA_2shp_0_4.png" /> NA<br />\
    <img src="styles/legend/gadm41_USA_shpgadm41_USA_2shp_0_5.png" /> <br />'
        });
var lyr_2023nws_precip_wytd_20231001_prtif_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "2023 — nws_precip_wytd_20231001_pr.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2023nws_precip_wytd_20231001_prtif_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7857007.309769, 1543600.266595, -6845764.612890, 2558960.620228]
                            })
                        });
var lyr_2023nws_precip_wytd_20231001_conustif_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "2023 — nws_precip_wytd_20231001_conus.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2023nws_precip_wytd_20231001_conustif_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-14926889.074728, 2247377.404534, -6669286.140640, 7938337.327370]
                            })
                        });
var lyr_2023nws_precip_wytd_20231001_aktif_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "2023 — nws_precip_wytd_20231001_ak.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2023nws_precip_wytd_20231001_aktif_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-19820017.465701, 5751251.678094, -13613386.438954, 13256008.638379]
                            })
                        });
var format_gadm41_USA_shpgadm41_USA_1shp_4 = new ol.format.GeoJSON();
var features_gadm41_USA_shpgadm41_USA_1shp_4 = format_gadm41_USA_shpgadm41_USA_1shp_4.readFeatures(json_gadm41_USA_shpgadm41_USA_1shp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_USA_shpgadm41_USA_1shp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_USA_shpgadm41_USA_1shp_4.addFeatures(features_gadm41_USA_shpgadm41_USA_1shp_4);
var lyr_gadm41_USA_shpgadm41_USA_1shp_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm41_USA_shpgadm41_USA_1shp_4, 
                style: style_gadm41_USA_shpgadm41_USA_1shp_4,
                interactive: true,
                title: '<img src="styles/legend/gadm41_USA_shpgadm41_USA_1shp_4.png" /> gadm41_USA_shp — gadm41_USA_1.shp'
            });
var format_gadm41_USA_shpgadm41_USA_0shp_5 = new ol.format.GeoJSON();
var features_gadm41_USA_shpgadm41_USA_0shp_5 = format_gadm41_USA_shpgadm41_USA_0shp_5.readFeatures(json_gadm41_USA_shpgadm41_USA_0shp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_USA_shpgadm41_USA_0shp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_USA_shpgadm41_USA_0shp_5.addFeatures(features_gadm41_USA_shpgadm41_USA_0shp_5);
var lyr_gadm41_USA_shpgadm41_USA_0shp_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm41_USA_shpgadm41_USA_0shp_5, 
                style: style_gadm41_USA_shpgadm41_USA_0shp_5,
                interactive: true,
                title: '<img src="styles/legend/gadm41_USA_shpgadm41_USA_0shp_5.png" /> gadm41_USA_shp — gadm41_USA_0.shp'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_2023nws_precip_wytd_20231001_prtif_1,lyr_2023nws_precip_wytd_20231001_conustif_2,lyr_2023nws_precip_wytd_20231001_aktif_3,],
                                title: "group1"});
var group_group2 = new ol.layer.Group({
                                layers: [lyr_gadm41_USA_shpgadm41_USA_2shp_0,],
                                title: "group2"});

lyr_gadm41_USA_shpgadm41_USA_2shp_0.setVisible(true);lyr_2023nws_precip_wytd_20231001_prtif_1.setVisible(true);lyr_2023nws_precip_wytd_20231001_conustif_2.setVisible(true);lyr_2023nws_precip_wytd_20231001_aktif_3.setVisible(true);lyr_gadm41_USA_shpgadm41_USA_1shp_4.setVisible(false);lyr_gadm41_USA_shpgadm41_USA_0shp_5.setVisible(false);
var layersList = [group_group2,group_group1,lyr_gadm41_USA_shpgadm41_USA_1shp_4,lyr_gadm41_USA_shpgadm41_USA_0shp_5];
lyr_gadm41_USA_shpgadm41_USA_2shp_0.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_gadm41_USA_shpgadm41_USA_1shp_4.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_gadm41_USA_shpgadm41_USA_0shp_5.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_gadm41_USA_shpgadm41_USA_2shp_0.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_gadm41_USA_shpgadm41_USA_1shp_4.set('fieldImages', {'GID_1': '', 'GID_0': '', 'COUNTRY': '', 'NAME_1': '', 'VARNAME_1': '', 'NL_NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'CC_1': '', 'HASC_1': '', 'ISO_1': '', });
lyr_gadm41_USA_shpgadm41_USA_0shp_5.set('fieldImages', {'GID_0': '', 'COUNTRY': '', });
lyr_gadm41_USA_shpgadm41_USA_2shp_0.set('fieldLabels', {});
lyr_gadm41_USA_shpgadm41_USA_1shp_4.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_gadm41_USA_shpgadm41_USA_0shp_5.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_gadm41_USA_shpgadm41_USA_0shp_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});