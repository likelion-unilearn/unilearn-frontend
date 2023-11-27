
import PropTypes from "prop-types";
import React from "react";

export const Component11 = ({ color = "#52525C", className }) => {
  return (
    <svg
      className={`component-11 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M14 10V8.5C14 7.67157 13.3284 7 12.5 7C11.6716 7 11 7.67157 11 8.5V10H14ZM9 8.5V10C7.34315 10 6 11.3431 6 13V17C6 18.6569 7.34315 20 9 20H16C17.6569 20 19 18.6569 19 17V13C19 11.3431 17.6569 10 16 10V8.5C16 6.567 14.433 5 12.5 5C10.567 5 9 6.567 9 8.5ZM14 12H16C16.5523 12 17 12.4477 17 13V17C17 17.5523 16.5523 18 16 18H9C8.44772 18 8 17.5523 8 17V13C8 12.4477 8.44772 12 9 12H11H14ZM12.5 17C13.3284 17 14 16.3284 14 15.5C14 14.6716 13.3284 14 12.5 14C11.6716 14 11 14.6716 11 15.5C11 16.3284 11.6716 17 12.5 17Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Component11.propTypes = {
  color: PropTypes.string,
};
