var key = 'AIzaSyAdrZuFXlo3OoE2XXEH5d0smdoPhE6EKXk';

// Search by coordinates
$('#AddrButton').on('click', function() {
  var latLng = $('#LatLng')[0].value.split(',');
  var result1 =
    'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
    latLng +
    '&key=' +
    key;

  $.ajax({
    type: 'GET',
    url: result1,
    success: function(e) {
      // Address output
      var search = e.results[0].address_components;
      var addrOutput = '<ul class="list-group">';
      for (var i = 0; i < search.length; i++) {
        addrOutput += `
        <li class="list-group-item"><strong>${search[i].types[0]}</strong>: ${
          search[i].long_name
        }</li>
      `;
      }
      addrOutput += '</ul>';
      document.getElementById('address').innerHTML = addrOutput;
    }
  });
});

// Search by address
$('#GeoButton').on('click', function() {
  var location = $('#Addr')[0].value.split(',');
  var result2 =
    'https://maps.googleapis.com/maps/api/geocode/json?address=' +
    location +
    '&key=' +
    key;

  $.ajax({
    type: 'GET',
    url: result2,
    success: function(e) {
      // Coordinates output
      var lat = e.results[0].geometry.location.lat;
      var lng = e.results[0].geometry.location.lng;
      var coordsOutput = `
      <ul class="list-group">
        <li class="list-group-item"><strong>Latitude</strong>: ${lat}</li>
        <li class="list-group-item"><strong>Longitude</strong>: ${lng}</li>
      </ul>
    `;
      document.getElementById('coords').innerHTML = coordsOutput;
    }
  });
});
