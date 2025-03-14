import React from "react";

const PauseIcon = ({ width, height, color = "#fff" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_520_823)">
        <path
          d="M2.90149 32.1562H7.44787C9.32872 32.1562 10.3292 31.1557 10.3292 29.2549V2.88134C10.3292 0.937985 9.32872 0.0175774 7.44787 0H2.90149C1.00061 0 0.000128614 1.00049 0.000128614 2.88134V29.2549C-0.0130544 31.1557 0.987432 32.1562 2.90149 32.1562ZM17.733 32.1562H22.2794C24.1602 32.1562 25.1607 31.1557 25.1607 29.2549V2.88134C25.1607 0.937985 24.1602 0 22.2794 0H17.733C15.8321 0 14.8316 1.00049 14.8316 2.88134V29.2549C14.8316 31.1557 15.819 32.1562 17.733 32.1562Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_520_823">
          <rect width="25.5027" height="32.1562" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PauseIcon;
