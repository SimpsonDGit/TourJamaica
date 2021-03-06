
/*
     * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
     * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
     */
			
    $( document ).on( "pageinit", "#map-page", function() 
	{
        var defaultLatLng = new google.maps.LatLng(18.021529, -76.769171);  // Default to Hollywood, CA when no geolocation support
        if ( navigator.geolocation ) {
            function success(pos) {
                // Location found, show map with these coordinates
                drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            }
            function fail(error) {
                drawMap(defaultLatLng);  // Failed to find location, show default map
            }
            // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
            navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
        } else {
            drawMap(defaultLatLng);  // No geolocation support, show default map
        }
        function drawMap(latlng) 
		{
            var myOptions = 
			{
                zoom: 17,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
			
            var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
            
			// Add an overlay to the map of current lat/lng
            var marker = new google.maps.Marker
			({
                position: latlng,
                map: map,
				title: "Sovereign Center",
                //icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
			});
			addMarker({lat:18.016466,lng:-76.747468});
        }
		
		function addMarker(coords)
		{
			// Add an overlay to the map of current lat/lng
			var marker = new google.maps.Marker
			({
				position: coords,
				map: map,
				icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
			});
		}
    });
