import React from "react";

const CloseSidebarIcon = ({width, height, color="#fff"}) => {
  return (
    <svg
      width= {width}
      height={height}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_273_2366)">
        <path
          d="M24.9692 4.46296V20.554C24.9692 23.4814 23.4507 25 20.4816 25H4.48765C1.53243 25 0 23.4814 0 20.554V4.46296C0 1.53547 1.53243 0.0169182 4.48765 0.0169182H20.4816C23.4507 0.0169182 24.9692 1.53547 24.9692 4.46296ZM13.4829 5.93415L8.13043 10.9283C7.23277 11.7722 7.23277 13.2617 8.13043 14.0916L13.4829 19.1028C13.9347 19.5314 14.8181 19.5592 15.2606 19.1335C15.7723 18.6189 15.7601 17.8153 15.2715 17.3467L10.0702 12.5085L15.2715 7.68715C15.777 7.20166 15.7631 6.37198 15.2376 5.88644C14.7691 5.44386 13.9884 5.46248 13.4829 5.93415Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_273_2366">
          <rect width="25.2061" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseSidebarIcon;
