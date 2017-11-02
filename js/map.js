var map;

function initMap() {
        var center = {lat: 47.1014091, lng: 37.5505232};
        
        var places = [
        	{
        	name: 'beetroot',
        	position: new google.maps.LatLng(47.1014091, 37.5505232),
        	icon: 'img/mapsel.png'
        	},
        ]

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: center
        });

        places.forEach(function(choosePlace){
        var marker = new google.maps.Marker({
        position: choosePlace.position,
        map: map,
        icon: choosePlace.icon
        });
        })
}

