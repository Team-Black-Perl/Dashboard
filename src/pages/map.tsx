import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // Example: New York City
      zoom: 9
    });

    return () => {
      map.remove(); // Cleanup
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default Map;
