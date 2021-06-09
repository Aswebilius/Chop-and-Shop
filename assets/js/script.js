var userLocation = {};
// var userDestination = "";
// var userDistance = "";
// var userMethod = "";
// var meters = "";

//on click function to gather user data
$("#submit").on("click", function (e) {
  var userDistance = $("input:radio[name=distance]:checked").val();
  var userMethod = $("input:radio[name=travel-method]:checked").val();
  var userDestination = $("input:radio[name=location-type]:checked").val();
  // milesToMeters();
  console.log(
    "first button data collection" + userDistance,
    userMethod,
    userDestination
  );
  placesApi(userDistance, userMethod, userDestination);
});

//convert miles to meters for the radius
// function milesToMeters() {
//   meters = userDistance * 1609.34;
//   // console.log(meters);
//   console.log(userDistance, userMethod, userDestination, meters);
//   // debugger;
//   placesApi();
// }

//user location
$("#location-btn").on("click", function (e) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (response) {
      //  placesApi(response.coords.latitude, response.coords.longitude);
      userLocation.lat = response.coords.latitude;
      userLocation.lon = response.coords.longitude;
      userLocation;
    });
    console.log(userLocation);
  }
});

function placesApi(location, distance, method, destinationType) {
  fetch(
    "https://api.allorigins.win/raw?url=" +
      encodeURIComponent(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
          location.lat +
          "," +
          location.lon +
          "&radius=" +
          distance +
          "&type=" +
          destinationType +
          "&key=AIzaSyBNemHqQ_a0mlEfgAo0C2IZN3hwCYT4RDo"
      )
  ).then(function (response) {
    // console.log(response);
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        // var searchResults =
        //   data.results[Math.floor(Math.random() * data.results.length)];
        // console.log(searchResults);

        // var locationLat = searchResults.geometry.location.lat;
        // var locationLng = searchResults.geometry.location.lng;

        // distanceMatrixApi(locationLat, locationLng, currentLat, currentLon);
      });
    }
  });
}

// function distanceMatrixApi(lat, lng, userLat, userLon) {
//   fetch(
//     "https://api.allorigins.win/raw?url=" +
//       encodeURIComponent(
//         "https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyBjep3oamseN_xrez7jazTRvj92qBnDqFI&origins=" +
//           userLat +
//           "," +
//           userLon +
//           "&destinations=" +
//           lat +
//           "," +
//           lng
//       )
//   ).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         console.log(data);
//       });
//     }
//   });
// }
