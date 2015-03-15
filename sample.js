function initialize() {
  var latlng1 = new google.maps.LatLng(35.697456,139.702148);
  var latlng2 = new google.maps.LatLng(34.694203,135.502625);

  var opts1 = {
    zoom: 13,
    center: latlng1,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var opts2 = {
    zoom: 13,
    center: latlng2,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map1 = new google.maps.Map(document.getElementById("map_canvas1"), opts1);
  var map2 = new google.maps.Map(document.getElementById("map_canvas2"), opts2);
}