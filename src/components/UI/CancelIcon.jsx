const CancelIcon = (props) => {
  return (
    <svg
      onClick={props.onClick}
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30px"
      viewBox="0 0 512 512"
      version="1.1"
      xmlSpace="preserve"
    >
      <g id="_x37_12-_close__x2C__cross__x2C__cancel__x2C_">
        <g>
          <line
            fill="none"
            stroke="#000000"
            strokeWidth="13.4167"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="2.6131"
            x1="486.21"
            x2="26.739"
            y1="26.814"
            y2="486.139"
          />

          <line
            fill="none"
            stroke="#000000"
            strokeWidth="13.4167"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="2.6131"
            x1="486.21"
            x2="26.739"
            y1="486.139"
            y2="26.814"
          />
        </g>
      </g>

      <g id="Layer_1" />
    </svg>
  );
};

export default CancelIcon;
