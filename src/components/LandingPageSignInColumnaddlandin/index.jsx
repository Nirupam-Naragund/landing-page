import React from "react";
import { Button, Text, Heading, Img } from "./..";

export default function LandingPageSignInColumnaddlandin({
  addyourownOne = "Add your own",
  description = "Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page",
  addNew = "Add new",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex items-center gap-6">
        <Button size="md" shape="square" className="w-[40px]">
          <Img src="images/img_add.svg" />
        </Button>
        <Heading as="h1" className="self-end">
          {addyourownOne}
        </Heading>
      </div>
      <Text size="lg" as="p" className="tracking-[0.36px] leading-[30px]">
        {description}
      </Text>
      <Button shape="round" className="sm:px-5 font-semibold border-deep_purple-400 border border-solid min-w-[121px]">
        {addNew}
      </Button>
    </div>
  );
}
