
const MAP_ACCESS_TOKEN = 'pk.eyJ1IjoidGFydW4tZGV2IiwiYSI6ImNrc2JvOGV3dDA4bWoydnFrdzJtMmplbGMifQ.0EiBGn1VllGcsjZqrNUGfQ';
const loader = document.querySelector('.center');

const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

successLocation=(pos)=>{
    setupMap([pos.coords.longitude, pos.coords.latitude])
    document.querySelector('.mapboxgl-ctrl-logo').remove();
    document.querySelector('.mapboxgl-ctrl-bottom-right').remove();
    loader.classList.add('hide');
}

errorLocation = (err)=>{
    console.error(err)
}

navigator.geolocation.getCurrentPosition(successLocation,errorLocation, {
    enableHighAccuracy: true
}
)



function setupMap(position) {
       const map =  new mapboxgl.Map({
            accessToken: MAP_ACCESS_TOKEN,
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v9',
            center: position,
            zoom: 10
        });

        map.addControl(new mapboxgl.NavigationControl());   
        map.addControl(
            new MapboxDirections({
            accessToken: MAP_ACCESS_TOKEN
            }),
            'top-left'
            ); 

            for (const input of inputs) {
                input.onclick = (layer) => {
                const layerId = layer.target.id;
                map.setStyle('mapbox://styles/mapbox/' + layerId);
                };
                }

}

 



