'use client';
import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export default function Cobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // ✅ Typed ref

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      opacity: 0.34,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 8,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.4235, 0.1372, 0.6157], // ✅ Fixed trailing comma
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} className="w-80 h-80 aspect-[1]" />
    </div>
  );
}
