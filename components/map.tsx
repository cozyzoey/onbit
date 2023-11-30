"use client";

import clsx from "clsx";
import Script from "next/script";
import { ComponentPropsWithoutRef, useCallback, useRef } from "react";

const API_CLIENT_ID = "epdkl0jtmp";

export default function Map({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
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
      map,
    });
  }, []);

  return (
    <div
      className={clsx("aspect-[7/6] w-full md:aspect-video", className)}
      {...props}
    >
      <Script
        strategy="lazyOnload"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${API_CLIENT_ID}`}
        onReady={initMap}
      />
      <div ref={mapRef} className="h-full w-full"></div>
    </div>
  );
}
