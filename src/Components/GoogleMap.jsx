import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

// Default center (will be updated with actual hospital data)
const defaultCenter = {
  lat: 35.1756738,
  lng: -86.09086479999999,
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBE6Ii-ZxHsICvzD2Fp3m3iMPYX-Vie1N4',
  });

  const [map, setMap] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [center, setCenter] = useState(defaultCenter);
  const [isLoading, setIsLoading] = useState(true);

  // Hospital data
  const hospitalsData = []

  // Function to fetch coordinates
  const getCoordinates = async (address) => {
    try {
      const apiKey = "AIzaSyBE6Ii-ZxHsICvzD2Fp3m3iMPYX-Vie1N4";
      const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: address,
          key: apiKey,
        },
      });
      
      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        return { lat, lng };
      } else {
        console.error("No coordinates found for address:", address);
        return null;
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error.message);
      return null;
    }
  };

  // Function to get hospital data with coordinates
  const getHospitalsWithCoordinates = async () => {
    setIsLoading(true);
    const hospitalsWithCoordinates = [];

    for (const hospital of hospitalsData) {
      console.log(`${hospital["ADDRESS LINE 1"]}, ${hospital["CITY"]}, ${hospital["STATE"]} ${hospital["ZIP CODE"]}`);
      
      const fullAddress = `${hospital["ADDRESS LINE 1"]}, ${hospital["CITY"]}, ${hospital["STATE"]} ${hospital["ZIP CODE"]}`;
      const position = await getCoordinates(fullAddress);
      
      if (position) {
        hospitalsWithCoordinates.push({
          id: hospital["ENROLLMENT ID"],
          name: hospital["DOING BUSINESS AS NAME"],
          position: position,
          description: `${hospital["PRACTICE LOCATION TYPE"]} - ${hospital["CITY"]}, ${hospital["STATE"]}`,
          address: fullAddress,
          npi: hospital["NPI"]
        });
      }
    }

    setHospitals(hospitalsWithCoordinates);
    console.log('hospital============',hospitalsWithCoordinates);
    
    // Set center to first hospital's coordinates if available
    if (hospitalsWithCoordinates.length > 0) {
      setCenter(hospitalsWithCoordinates[0].position);
    }
    
    setIsLoading(false);
  };

  useEffect(() => {
    getHospitalsWithCoordinates();
  }, []);

  const onLoad = useCallback(function callback(map) {
    // Create bounds that include all markers
    if (hospitals.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      hospitals.forEach(hospital => {
        bounds.extend(hospital.position);
      });
      map.fitBounds(bounds);
    }
    setMap(map);
  }, [hospitals]);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const handleMarkerClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handleInfoWindowClose = () => {
    setSelectedHospital(null);
  };

  if (isLoading) {
    return <div>Loading hospital data...</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Adding hospital markers */}
      {hospitals.map(hospital => (
        <Marker
          key={hospital.id}
          position={hospital.position}
          onClick={() => handleMarkerClick(hospital)}
        />
      ))}

      {/* Info Window appears when a marker is clicked */}
      {selectedHospital && (
        <InfoWindow
          position={selectedHospital.position}
          onCloseClick={handleInfoWindowClose}
        >
          <div style={{ padding: '5px', maxWidth: '300px' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>{selectedHospital.name}</h3>
            <p style={{ margin: '0 0 5px 0' }}><strong>NPI:</strong> {selectedHospital.npi}</p>
            <p style={{ margin: '0 0 5px 0' }}><strong>Type:</strong> {selectedHospital.description}</p>
            <p style={{ margin: '0' }}><strong>Address:</strong> {selectedHospital.address}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <div>Loading Google Maps...</div>
  );
}

export default React.memo(MapComponent);