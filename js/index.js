
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
	
	
	var app = 
	{
		getPosition: function(event)
		{
			var status = "";
			var watchID = navigator.geolocation.watchPosition(
				function onSuccess(position)
				{
					status = "true;"+position.coords.latitude+","+position.coords.longitude+";"+position.coords.speed+";";
				},
				function onError(error)
				{
					status = "false;"+error.message+";";
				},
				{ enableHighAccuracy: true }
			);
			
			while(status != ""){
				navigator.geolocation.clearWatch(watchID);
				event(status);
			}
		},
		
		start: function(){
			app.getPosition(app.write);
		},
		
		write: function(data)
		{
			var field = document.getElementById("status");
			data = data.split(";");
			
			if(data[0] == "true")
			{
				field.innerHTML = "<b>Lat|Lon: </b>"+ data[1] +" <b>Speed:</b> "+data[2];
			}
			else{
				field.innerHTML = "<b>Error: </b>"+ data[1];
			}		
		},
	};
	
	