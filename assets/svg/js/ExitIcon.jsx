const ExitIcon = ({ width, height, color = "#fff" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_273_2582)">
      <path
        d="M17.2139 3.1155V7.21147H15.2501V3.23201C15.2501 2.44132 14.8458 1.99994 14.0366 1.99994H4.81353C3.99491 1.99994 3.59066 2.44132 3.59066 3.23201V16.7605C3.59066 17.5512 3.99491 17.9926 4.81353 17.9926H14.0366C14.8458 17.9926 15.2501 17.5512 15.2501 16.7605V12.7768H17.2139V16.877C17.2139 18.9383 16.1836 19.9925 14.1975 19.9925H4.64318C2.65706 19.9925 1.63623 18.9383 1.63623 16.877V3.1155C1.63623 1.06387 2.65706 0 4.64318 0H14.1975C16.1836 0 17.2139 1.06387 17.2139 3.1155Z"
        fill={color}
      />
      <path
        d="M10.5978 10.938H19.4276L20.779 10.8569L20.215 11.3302L18.9483 12.5313C18.7637 12.6892 18.6804 12.9196 18.6804 13.1585C18.6804 13.6227 19.0077 14.0022 19.4685 14.0022C19.7093 14.0022 19.8938 13.9019 20.0575 13.7345L22.8863 10.7106C23.1219 10.4675 23.2031 10.2394 23.2031 9.99413C23.2031 9.74888 23.1219 9.5208 22.8863 9.27771L20.0575 6.25379C19.8938 6.07665 19.7093 5.98602 19.4685 5.98602C19.0077 5.98602 18.6804 6.35597 18.6804 6.82016C18.6804 7.05902 18.7637 7.29912 18.9483 7.45697L20.215 8.65803L20.7884 9.13136L19.4276 9.0503H10.5978C10.1152 9.0503 9.69629 9.48019 9.69629 9.99413C9.69629 10.5081 10.1152 10.938 10.5978 10.938Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_273_2582">
        <rect width="25" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ExitIcon;