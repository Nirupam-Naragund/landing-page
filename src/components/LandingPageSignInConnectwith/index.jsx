import React from "react";
import { Heading } from "./..";

export default function LandingPageSignInConnectwith({ orconnectwith = "Or connect with", ...props }) {
  return (
    <div {...props}>
      <div className="sm:self-stretch h-[2px] mb-1.5 bg-blue_gray-100 flex-1" />
      <Heading size="xs" as="h1" className="!text-black-900_01">
        {orconnectwith}
      </Heading>
      <div className="sm:self-stretch h-[2px] mb-1.5 bg-blue_gray-100 flex-1" />
    </div>
  );
}
