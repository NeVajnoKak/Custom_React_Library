import React from "react";

const MoreIcon = ({ width, height, color = "#fff" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_345_3202)">
        <path
          d="M33.1982 8.02537C35.4209 8.02537 37.2109 6.23534 37.2109 4.01269C37.2109 1.79003 35.4209 0 33.1982 0C30.9956 0 29.1855 1.79003 29.1855 4.01269C29.1855 6.23534 30.9956 8.02537 33.1982 8.02537Z"
          fill={color}
          fill-opacity="0.85"
        />
        <path
          d="M18.6055 8.02537C20.8281 8.02537 22.6181 6.23534 22.6181 4.01269C22.6181 1.79003 20.8281 0 18.6055 0C16.3828 0 14.5928 1.79003 14.5928 4.01269C14.5928 6.23534 16.3828 8.02537 18.6055 8.02537Z"
          fill={color}
          fill-opacity="0.85"
        />
        <path
          d="M4.01269 8.02537C6.23534 8.02537 8.02537 6.23534 8.02537 4.01269C8.02537 1.79003 6.23534 0 4.01269 0C1.79003 0 0 1.79003 0 4.01269C0 6.23534 1.79003 8.02537 4.01269 8.02537Z"
          fill={color}
          fill-opacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_345_3202">
          <rect width="37.5527" height="8.04979" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MoreIcon;
