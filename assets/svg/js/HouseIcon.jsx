import React from "react";

const HouseIcon = ({ width, height, color = "#fff" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_271_682)">
        <path
          d="M9.51259 19.7985H15.3089V12.7678C15.3089 12.2889 14.9902 11.9752 14.5035 11.9752H10.3204C9.83358 11.9752 9.51259 12.2889 9.51259 12.7678V19.7985ZM5.60689 21.2249H19.1519C20.7203 21.2249 21.655 20.3256 21.655 18.8277V7.91094L19.4841 6.47169V18.1738C19.4841 18.7544 19.1445 19.0886 18.5754 19.0886H6.17294C5.60381 19.0886 5.27462 18.7544 5.27462 18.1738V6.47169L3.09335 7.91094V18.8277C3.09335 20.3256 4.02808 21.2249 5.60689 21.2249ZM0 10.1032C0 10.6689 0.433964 11.151 1.14355 11.151C1.48751 11.151 1.79884 10.9708 2.06274 10.7533L12.0042 2.53961C12.2737 2.31881 12.5814 2.3291 12.8323 2.53961L22.7692 10.7533C23.0436 10.9708 23.3549 11.151 23.6989 11.151C24.3353 11.151 24.8215 10.7615 24.8215 10.134C24.8215 9.76366 24.6874 9.47686 24.4039 9.24228L13.9032 0.560413C12.9981 -0.186804 11.8489 -0.186804 10.9438 0.560413L0.428099 9.24454C0.144569 9.47912 0 9.80482 0 10.1032ZM18.618 5.05704L21.655 7.57518V2.7918C21.655 2.3128 21.3362 2.00945 20.8599 2.00945H19.4257C18.939 2.00945 18.618 2.3128 18.618 2.7918V5.05704Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_271_682">
          <rect width="25" height="23" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HouseIcon;
