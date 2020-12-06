function updateMap()
{

    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5jaGFsMjdzcmkiLCJhIjoiY2toa2FzOXJsMHlxeDJ6dnNsZGdqaG5taSJ9.z-Z9GC81_VhCdZWri9rswQ';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 1,
      center: [10,20]
    });

    fetch("/data.json")
    .then(response => response.json())
    .then(resp => {
        console.log(resp.data)
        resp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255) {
                    color = "rgb(255, 0, 0)";
                }
                else {
                    color = `rgb(${cases}, 0, 0)`;
                }


                console.log(cases, color);
                var marker = new mapboxgl.Marker({
                        draggable: false,
                        color: color,
                    })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            }
        )
    });
}

updateMap();