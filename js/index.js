
	/* function geolocation(){
		var watchId = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
	}
		
	function onSuccess(position) {
		var element = document.getElementById('geolocation');
		element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
							'Longitude: ' + position.coords.longitude     + '<br />' +
							'Speed: ' 	  + position.coords.speed;
	}
	
	function onError(error) {
		var element = document.getElementById('geolocation');
		element.innerHTML = 'code: '    + error.code  + '<br>'+ 
							'message: ' + error.message ;
	} */
	
	var id;
	
	var app = 
	{
		getPosition: function()
		{			
			function success(position)
			{
				document.getElementById("status").innerHTML += "<br>latlon: "+ position.coords.latitude+","+position.coords.longitude;
			};

			function error(err)
			{
				alert('ERRO(' + err.code + '): ' + err.message);
			};
			
			id = navigator.geolocation.watchPosition(success, error, {	enableHighAccuracy: true , timeout: 10000});
		}
	};