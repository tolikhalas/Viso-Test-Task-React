import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function GoogleMaps() {
  const googleMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGoogleMap = async () => {
      // Google Maps loader
      const loader = new Loader({
        apiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      // Map Lib
      const { Map } = (await loader.importLibrary(
        "maps",
      )) as google.maps.MapsLibrary;

      // Map init positino
      const position = {
        lat: 50.450001,
        lng: 30.523333,
      };

      // Map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        // City zoom
        zoom: 11,
        mapId: "GENERAL_POSITION",
      };

      // Setup map
      new Map(googleMapRef.current as HTMLDivElement, mapOptions);
    };

    initGoogleMap();
  }, []);

  return (
    <div className="h-full w-full" ref={googleMapRef}>
      GoogleMaps
    </div>
  );
}
