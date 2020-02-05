let map;

function initMap() {
    map = new google.maps.Map(document.querySelector('#map'), {
        center: {lat: 34.4732, lng: 143.4523},
        zoom: 8
    });
}