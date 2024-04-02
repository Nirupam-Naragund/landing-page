import React from "react";

const sizes = {
  "2xl": "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  xl: "text-2xl font-semibold md:text-[22px]",
  s: "text-sm font-bold",
  md: "text-lg font-semibold",
  xs: "text-xs font-semibold",
  lg: "text-xl font-semibold",
};

const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
