"use client";

import React, { useState, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { ChevronRight } from "lucide-react";

export const GoogleMapComponent = () => {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  const center = {
    lat: 37.7749, // Latitude for the center of the map
    lng: -122.4194, // Longitude for the center of the map
  };

  const onLoad = (map: any) => {
    mapRef.current = map;
    setMap(map);
  };

  const onUnmount = () => {
    mapRef.current = null;
    setMap(null);
  };

  return (
    <>
      <section className="relative max-w-full mx-auto z-1">
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-24 gap-12 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center">
            <h1 className="text-sm text-gray-400 group  mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              Build projects for everyone
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>

            <h2 className="text-4xl font-medium tracking-tighter mx-auto md:text-6xl">
              Designing your projects faster with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-primary">
                the best archticutre solutions.
              </span>
            </h2>

            <p className="max-w-2xl mx-auto">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="mt-32 mx-10">
            <LoadScript googleMapsApiKey="AIzaSyCfeIDuHSIJpeXmeT54dmYBOvuY2JAGQus">
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "400px" }}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </section>
    </>
  );
};
