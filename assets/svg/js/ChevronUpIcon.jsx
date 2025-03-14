import React from "react";

const ChevronUpIcon = ({ width, height, color = "#fff" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_344_3191)">
        <path
          d="M0.708979 15.6587C0.254881 16.1016 0 16.7021 0 17.3823C0 18.7759 1.09423 19.8745 2.47899 19.8745C3.16795 19.8745 3.79929 19.5976 4.25534 19.1172L18.3267 4.8979H16.2934L30.3516 19.1172C30.8076 19.602 31.479 19.8745 32.1436 19.8745C33.5283 19.8745 34.6025 18.7759 34.6025 17.3823C34.6025 16.6977 34.352 16.0972 33.8935 15.6587L19.2021 0.825675C18.6733 0.261228 18.0263 0.00439435 17.3135 0C16.585 0 15.9536 0.256833 15.4248 0.825675L0.708979 15.6587Z"
          fill={color}
          fill-opacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_344_3191">
          <rect width="34.9443" height="21.4238" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronUpIcon;
