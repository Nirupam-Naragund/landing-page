import React from "react";
import { Heading } from "./..";

export default function LandingPageSignInSigninjoinin({ signin = "Sign In", joinin = "Join In", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col self-end w-[41%]">
        <a href="#">
          <Heading size="lg" as="h1" className="!text-deep_purple-400">
            {signin}
          </Heading>
        </a>
        <div className="h-[2px] bg-deep_purple-400" />
      </div>
      <Heading size="lg" as="h2" className="self-start !text-gray-500">
        {joinin}
      </Heading>
    </div>
  );
}
