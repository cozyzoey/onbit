"use client";

import Script from "next/script";
import { useRef } from "react";

const API_CLIENT_ID = "epdkl0jtmp";

export default function Map() {
  const mapRef = useRef(null);

  const initMap = () => {
    if (!mapRef.current) return;

    const location = new naver.maps.LatLng(37.482476, 126.997236);

    const map = new window.naver.maps.Map(mapRef.current, {
      center: location,
      zoom: 17,
      minZoom: 10,
      maxZoom: 20,
      zoomControlOptions: {
        style: window.naver.maps.ZoomControlStyle.SMALL,
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    });

    new window.naver.maps.Marker({
      position: location,
      map: map,
    });
  };

  return (
    <div className="aspect-[7/6] w-full md:aspect-video">
      <Script
        strategy="lazyOnload"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${API_CLIENT_ID}`}
        onReady={initMap}
      />
      <div ref={mapRef} className="h-full w-full"></div>
    </div>
  );
}
