
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
		getPosition: function()
		{
			var status = "";
			var watchID = navigator.geolocation.watchPosition(
				function onSuccess(position)
				{
					alert("#Success");
					status = "true;"+position.coords.latitude+","+position.coords.longitude+";"+position.coords.speed+";";
				},
				function onError(error)
				{
					alert("#Error");
					status = "false;"+error.message+";";
				},
				{ enableHighAccuracy: true }
			);
			navigator.geolocation.clearWatch(watchID);
			return status;
		},
		
		start: function(){
			var field = document.getElementById("status");
		
			var data = app.getPosition();
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
	
	