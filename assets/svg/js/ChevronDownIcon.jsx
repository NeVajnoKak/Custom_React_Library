import React from "react";

const ChevronDownIcon = ({
  width,
  height,
  color = "#fff",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_339_3182)">
        <path
          d="M17.3135 21.5615C18.0263 21.5571 18.6733 21.3003 19.2021 20.7358L33.8935 5.90281C34.352 5.44432 34.6025 4.86376 34.6025 4.17919C34.6025 2.78565 33.5283 1.68702 32.1436 1.68702C31.479 1.68702 30.8276 1.9795 30.3516 2.44434L16.2934 16.6436H18.3267L4.25534 2.44434C3.77927 1.98389 3.16795 1.68702 2.47899 1.68702C1.09423 1.68702 0 2.78565 0 4.17919C0 4.85936 0.254881 5.43992 0.708979 5.90281L15.4248 20.7358C15.9736 21.3047 16.585 21.5615 17.3135 21.5615Z"
          fill={color}
          fill-opacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_339_3182">
          <rect width="34.9443" height="21.5615" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronDownIcon;
