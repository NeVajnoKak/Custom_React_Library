import React from "react";

const ChevronRightIcon = ({
  width,
  height,
  color = "#fff",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_613_776)">
        <path
          d="M24.5869 17.2891C24.5825 16.5762 24.33 15.9648 23.7612 15.4004L8.93259 0.708979C8.4741 0.230467 7.89353 0 7.20897 0C5.81542 0 4.7168 1.07421 4.7168 2.45897C4.7168 3.12351 5.00928 3.75485 5.47412 4.25094L18.6602 17.2847L5.47412 30.3272C5.01367 30.8232 4.7168 31.4346 4.7168 32.1235C4.7168 33.5083 5.81542 34.5825 7.20897 34.5825C7.88914 34.5825 8.4741 34.352 8.93259 33.8735L23.7612 19.1777C24.3344 18.6133 24.5869 17.9975 24.5869 17.2891Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_613_776">
          <rect width="24.5869" height="34.6025" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronRightIcon;
