
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
	
	var n = 0;
	var id, coords, options;
	
	var app = 
	{
		load: function()
		{
			app.getPosition();
		},
	
		getPosition: function()
		{			
			function success(position)
			{
				console.log(n);
				n++;
				
				coords = position.coords.latitude+","+position.coords.longitude+";"+position.coords.speed;
	
				app.write(coords);
			//	navigator.geolocation.clearWatch(id);
			};

			function error(err)
			{
				console.warn('ERRO(' + err.code + '): ' + err.message);
			};

			options = {	enableHighAccuracy: false , timeout: 10000};

			id = navigator.geolocation.watchPosition(success, error, options);
		},
		
		write: function(data)
		{
			data = data.split(";");
			document.getElementById("status").innerHTML += "<br>latlon: "+data[0]+"<br> speed: "+data[1];
		}
	};