"use client";

import React, { useEffect, useRef } from "react";

const SvgComponent = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgPath = svgRef.current.querySelector(".path");
    const totalLength = svgPath.getTotalLength(); // Get total length of the path

    // Set initial strokeDasharray and strokeDashoffset
    svgPath.style.strokeDasharray = totalLength;
    svgPath.style.strokeDashoffset = totalLength;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight; // Current scroll position
      const svgTop =
        svgRef.current.getBoundingClientRect().top + window.scrollY; // SVG position from the top of the page
      const svgHeight = svgRef.current.clientHeight; // SVG height

      // Calculate scroll progress
      const progress = (scrollPosition - svgTop) / svgHeight;

      // Map progress to stroke-dashoffset (from 0 to totalLength)
      const drawLength = Math.max(0, Math.min(1, progress)) * totalLength;
      svgPath.style.strokeDashoffset = totalLength - drawLength;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="1110"
      height="355"
      viewBox="0 0 1110 355"
      fill="none"
    >
      <path
        className="path-background"
        d="M5.45703 5.01074C315.324 5.01074 944.484 5.01074 982.19 5.01074C1029.32 5.01074 1099.86 18.5501 1102.12 108.64C1103.99 182.836 1104.46 228.212 1104.46 241.089C1102.12 301.182 1078.51 349.011 982.19 349.011H5.45703"
        stroke="#DBDBDB"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        className="path"
        d="M5.45703 5.01074C315.324 5.01074 944.484 5.01074 982.19 5.01074C1029.32 5.01074 1099.86 18.5501 1102.12 108.64C1103.99 182.836 1104.46 228.212 1104.46 241.089C1102.12 301.182 1078.51 349.011 982.19 349.011H5.45703"
        stroke="#C2202B"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SvgComponent;
