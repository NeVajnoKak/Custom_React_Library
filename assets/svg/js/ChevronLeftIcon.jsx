import React from "react";

const ChevronLeftIcon = ({
  width,
  height,
  color = "#fff",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_613_767)">
        <path
          d="M0 17.2891C0 17.9975 0.272459 18.6133 0.825675 19.1777L15.6543 33.8735C16.1128 34.352 16.7178 34.5825 17.3979 34.5825C18.7915 34.5825 19.8701 33.5083 19.8701 32.1235C19.8701 31.4346 19.5932 30.8232 19.1128 30.3272L5.94674 17.2847L19.1128 4.25094C19.5976 3.75485 19.8701 3.12351 19.8701 2.45897C19.8701 1.07421 18.7915 0 17.3979 0C16.7134 0 16.1128 0.230467 15.6543 0.708979L0.825675 15.4004C0.276853 15.9648 0.00439435 16.5762 0 17.2891Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_613_767">
          <rect width="25.2705" height="34.6025" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronLeftIcon;
