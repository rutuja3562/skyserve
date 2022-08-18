import { MapContainer } from "react-leaflet/MapContainer";
import React, { useState } from "react";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet";
import { Popup, FeatureGroup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import { EditControl } from "react-leaflet-draw";
import { polygon } from "../Polygon.jsx";
const data = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [125.6, 10.1],
    },
    properties: {
      name: "Dinagat Islands",
    },
  },
];
const _created = (e) => {
  console.log(e);
};
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

export const Leaflet = () => {
  console.log(polygon);
  const [center, setCenter] = useState({ lat: 10.1, lng: 125.6 });

  const ZOOM_LEVEL = 9;

  const greenOptions = { color: "green" ,backgroundColor:"green"};

  //   const markericon = new L.Icon({
  //     iconUrl: require("../img/l.webp"),
  //     iconSize: [35, 45],
  //     iconAnchor: [17, 45],
  //     popupAnchor: [0, -46],
  //   });

  return (
    <MapContainer className={"Map-Container"} center={center} zoom={ZOOM_LEVEL}>
      <FeatureGroup>
        <EditControl position="topright" onCreated={_created} />
      </FeatureGroup>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((e, i) => {
        return (
          <Marker key={i} position={[10.1, 125.6]}>
            <Popup>{e.properties.name}</Popup>
          </Marker>
        );
      })}
      <Polygon pathOptions={greenOptions} positions={polygon} />
    </MapContainer>
  );
};
