import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

// Sample location data
const locations = [
  {
    id: 1,
    name: "Location One",
    position: { lat: -3.745, lng: -38.523 },
    description: "This is the first location"
  },
  {
    id: 2,
    name: "Location Two",
    position: { lat: -3.742, lng: -38.520 },
    description: "This is the second location"
  },
  {
    id: 3,
    name: "Location Three",
    position: { lat: -3.748, lng: -38.526 },
    description: "This is the third location"
  }
];

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBE6Ii-ZxHsICvzD2Fp3m3iMPYX-Vie1N4',
  });

  const [map, setMap] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
    alert('heyy')
  };

  const handleInfoWindowClose = () => {
    setSelectedLocation(null);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Adding multiple markers */}
      {locations.map(location => (
        <Marker
          key={location.id}
          position={location.position}
          onClick={() => handleMarkerClick(location)}
        />
      ))}

      {/* Info Window appears when a marker is clicked */}
      {selectedLocation && (
        <InfoWindow
          position={selectedLocation.position}
          onCloseClick={handleInfoWindowClose}
        >
          <div>
            <h3>{selectedLocation.name}</h3>
            <p>{selectedLocation.description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);