import React from "react";

const CheckMarkIcon = ({ width, height, color = "black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_354_3505)">
        <path
          d="M13.3525 34.5967C14.4673 34.5967 15.3471 34.1377 15.9633 33.1978L33.7129 5.457C34.1762 4.75632 34.3491 4.14695 34.3491 3.55955C34.3491 2.10399 33.3305 1.08301 31.8374 1.08301C30.7871 1.08301 30.1714 1.44189 29.5288 2.45897L13.2593 28.441L4.7861 17.2915C4.15427 16.4775 3.51169 16.125 2.57859 16.125C1.08544 16.125 0 17.186 0 18.666C0 19.3061 0.237304 19.938 0.766596 20.5893L10.7212 33.2192C11.4751 34.1597 12.2729 34.5967 13.3525 34.5967Z"
          fill={color}
          fill-opacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_354_3505">
          <rect width="34.6909" height="34.5967" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckMarkIcon;
