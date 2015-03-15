/* Google Maps APIサンプル */

var map;

function initialize() {
  var latlng = new google.maps.LatLng(35.185384,136.89909);
  var opts = {
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), opts);

  google.maps.event.addListener(map, 'drag', dispLatLng);
}

function dispLatLng(){
  var latlng = map.getCenter();
  var str = "[CENTER]=[" + latlng.lat() + "," + latlng.lng() + "]<br />";

  var latlngBounds = map.getBounds();
  var swLatlng = latlngBounds.getSouthWest();
  str = str + "[SouthWest]=[" + swLatlng.lat() + "," + swLatlng.lng() + "]<br />";

  var neLatlng = latlngBounds.getNorthEast();
  str = str + "[NorthEast]=[" + neLatlng.lat() + "," + neLatlng.lng() + "]";

  document.getElementById("latlng").innerHTML = str;
}
