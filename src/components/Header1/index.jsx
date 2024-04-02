import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, Input } from "./..";

export default function Header1({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <header {...props}>
      <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1243px]">
        <div className="flex sm:flex-col justify-between items-center w-[51%] md:w-full gap-5">
          <Img
            src="images/img_hobbycue_logo_v2_60x293.png"
            alt="hobbycuelogo"
            className="w-[47%] sm:w-full object-cover"
          />
          <Input
            color="gray_50_01"
            shape="round"
            name="search"
            placeholder={`Search here...`}
            value={searchBarValue1}
            onChange={(e) => setSearchBarValue1(e)}
            suffix={
              <div className="flex justify-center items-center w-[40px] h-[40px] bg-deep_purple-400 rounded-bl-[0px] rounded-br-lg rounded-tl-[0px] rounded-tr-lg">
                {searchBarValue1?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue1("")} height={16} width={16} fillColor="#ffffffff" />
                ) : (
                  <Img src="images/img_search.svg" alt="search" className="cursor-pointer" />
                )}
              </div>
            }
            className="w-[48%] sm:w-full gap-[35px] font-light border-blue_gray-50"
          />
        </div>
        <div className="flex sm:flex-col justify-center items-center w-[42%] md:w-full gap-6">
          <div className="flex items-center gap-1 flex-wrap">
            <Img src="images/img_explore_deep_purple_400.svg" alt="explore_one" className="h-[24px] w-[24px]" />
            <Text as="p" className="self-end !text-black-900_01 !font-medium">
              Explore
            </Text>
            <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
          </div>
          <div className="flex justify-center items-center sm:self-stretch gap-1 flex-1">
            <div className="h-[24px] w-[24px] md:h-auto p-0.5 bg-[url(/public/images/img_hobbies_deep_purple_400.svg)] bg-cover bg-no-repeat relative">
              <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[19px] w-[19px]" />
              <Img
                src="images/defaultNoData.png"
                alt="image"
                className="h-[12px] w-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[1px]"
              />
            </div>
            <Text as="p" className="self-end !text-black-900_01 !font-medium">
              Hobbies
            </Text>
            <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-[24px] w-[24px]" />
          </div>
          <Img src="images/img_bookmark_black_24dp.svg" alt="bookmarkblack" className="h-[24px] w-[24px] sm:w-full" />
          <Img
            src="images/img_notifications_black_24dp.svg"
            alt="notifications"
            className="h-[24px] w-[24px] sm:w-full"
          />
          <Img src="images/img_cart.svg" alt="cart_one" className="h-[24px] w-[24px] sm:w-full" />
          <Button
            shape="round"
            className="sm:self-stretch w-full sm:px-5 font-semibold border-deep_purple-400 border border-solid flex-1"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
