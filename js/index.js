	var app = {	
		
	};	
	function geolocation(){ 
			var watchId = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
		};	
	function onSuccess(position) {
		var element = document.getElementById('geolocation');
		element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
							'Longitude: ' + position.coords.longitude     + '<br />' +
							'Speed: ' 	  + position.coords.speed         + '<br />' +
							'<hr />' ;
	};					
	function onError(error) {
		alert('code: '    + error.code    + '\n' +
			  'message: ' + error.message + '\n');
	};