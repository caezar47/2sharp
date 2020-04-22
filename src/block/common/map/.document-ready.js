function initMap() {  
	var map_container_div_id = 'map-google';
	var cont = $('#' + map_container_div_id);  
	if(cont.length) {    
		var map_data = JSON.parse(cont.attr('data-map') || '{}');
		var coordMapOfficeOne = map_data.center;
		var zoomMapOfficeOne = map_data.zoom;    
		/*if($(document).width() < 768) {
			var coordMapOfficeOne = map_data.center_xs;
			var zoomMapOfficeOne = map_data.zoom_xs;    
		} */ 
		var styleMapOfficeOne = 
		[
			{
				featureType: "landscape",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			}, {
				featureType: "transit",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			}, {
				featureType: "poi",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			}, {
				featureType: "water",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			}, {
				featureType: "road",
				elementType: "labels.icon",
				stylers: [{
					visibility: "off"
				}]
			}, {
				stylers: [{
					saturation: -100
				}, {
					lightness: -2
				}]
			}, {
				featureType: "road",
				elementType: "labels.text.fill",
				stylers: [{
					visibility: "on"
				}, {
					lightness: 24
				}]
			}, {
				featureType: "road",
				elementType: "geometry",
				stylers: [{
					lightness: 57
				}]
			}
		],
		optionsMapOfficeOne = {
			zoom: zoomMapOfficeOne, 
			center: new google.maps.LatLng(coordMapOfficeOne[0], coordMapOfficeOne[1]), 
			styles: styleMapOfficeOne
		},
		idOfficeOne = document.getElementById(map_container_div_id),
		mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),
		iconOfficeOne = {   
			//path: "M29.0061 0C12.9878 0 -5.73408e-07 12.8421 -5.73408e-07 28.6841C-5.73408e-07 36.7885 7.98612 51.308 7.98612 51.308L27.9369 85L48.7532 51.7014C48.7532 51.7014 58 37.848 58 28.6841C58.0024 12.8421 45.0171 0 29.0061 0ZM28.8703 44.4827C19.6962 44.4827 12.2653 37.0854 12.2653 27.9432C12.2653 18.813 19.6938 11.4205 28.8703 11.4205C38.0395 11.4205 45.4777 18.813 45.4777 27.9432C45.4777 37.0854 38.0395 44.4827 28.8703 44.4827Z", 
			//fillColor: '#00AEF3',
			//strokeColor: '#000000',
			//fillOpacity: 1,
			//anchor: new google.maps.Point(29,85),
			anchor: new google.maps.Point(0,0),
			strokeWeight: 0,
			//scale: 1,
			url: "img/svg/map-marker.svg",
		}; 
		if(map_data.placemarks.length) {
			for(var i = 0; i < map_data.placemarks.length; i++) {
				var iconCoordOfficeOne = {lat: map_data.placemarks[i].coord[0], lng: map_data.placemarks[i].coord[1]}, 
				OfficeOne = new google.maps.Marker({
					position: iconCoordOfficeOne,
					map: mapOfficeOne,
					icon: iconOfficeOne,
					title: map_data.placemarks[i].title,
					  //animation: google.maps.Animation.DROP
				});
			}
		}
	}  
}; 
initMap();