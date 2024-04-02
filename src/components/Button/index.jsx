import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-lg",
};
const variants = {
  outline: {
    black_900_01: "border-black-900_01 border border-solid text-black-900_01",
  },
  fill: {
    white_A700: "bg-white-A700 text-deep_purple-400",
    deep_purple_400: "bg-deep_purple-400 text-white-A700",
    gray_100: "bg-gray-100 text-black-900",
    blue_gray_50: "bg-blue_gray-50",
  },
};
const sizes = {
  lg: "h-[46px] px-4 text-xl",
  md: "h-[40px] px-2",
  xs: "h-[24px] px-1",
  sm: "h-[40px] pl-6 pr-[35px] text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["lg", "md", "xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["black_900_01", "white_A700", "deep_purple_400", "gray_100", "blue_gray_50"]),
};

export { Button };
