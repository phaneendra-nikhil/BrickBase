import { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      () => {
        console.error("Unable to retrieve your location");
        setPosition([52.4797, -1.90269]); // Default position (Birmingham) if geolocation fails
      }
    );
  }, []);

  return position ? (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Your Position
        </Popup>
      </Marker>
      {items && items.length > 0 ? (
        items.map((item) => <Pin item={item} key={item.id} />)
      ) : (
        <p>No items to display</p>
      )}
    </MapContainer>
  ) : (
    <p>Loading map...</p>
  );
}

export default Map;
