import React from "react";

const sizes = {
  xs: "text-[10px] font-medium",
  lg: "text-lg font-light",
  s: "text-xs font-normal",
  xl: "text-4xl font-medium md:text-[34px] sm:text-[32px]",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
