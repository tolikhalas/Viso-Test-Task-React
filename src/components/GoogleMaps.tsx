import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function GoogleMaps() {
  const googleMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGoogleMap = async () => {
      const loader = new Loader({
        apiKey: import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map } = (await loader.importLibrary(
        "maps",
      )) as google.maps.MapsLibrary;

      const position = {
        lat: 50.450001,
        lng: 30.523333,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 11,
        mapId: "GENERAL_POSITION",
      };

      // Setup map
      const map = new Map(googleMapRef.current as HTMLDivElement, mapOptions);
    };

    initGoogleMap();
  }, []);

  return (
    <div className="h-full w-full" ref={googleMapRef}>
      GoogleMaps
    </div>
  );
}
