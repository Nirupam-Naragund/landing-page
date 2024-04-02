import React from "react";
import { Text, Input, Heading, Img, Button } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1217px]">
        <div className="flex flex-col items-start mt-0.5 gap-[11px]">
          <Heading size="s" as="p" className="tracking-[0.07px]">
            Hobbycue
          </Heading>
          <ul className="flex flex-col items-start gap-[5px]">
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  About Us
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Our Services
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Work with Us
                </Text>
              </a>
            </li>
            <li>
              <a href="FAQ" target="_blank" rel="noreferrer">
                <Text as="p" className="tracking-[0.07px]">
                  FAQ
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Contact Us
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3.5">
          <Heading size="s" as="p" className="tracking-[0.07px]">
            How Do I
          </Heading>
          <ul className="flex flex-col items-start gap-1">
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Sign Up
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Add a Listing
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Claim Listing
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Post a Query
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Add a Blog Post
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Other Queries
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <Heading size="s" as="p" className="tracking-[0.07px]">
            Quick Links
          </Heading>
          <ul className="flex flex-col items-start gap-1">
            <li>
              <a href="Listings" target="_blank" rel="noreferrer">
                <Text as="p" className="tracking-[0.07px]">
                  Listings
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Blog Posts
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.07px]">
                  Shop / Store
                </Text>
              </a>
            </li>
            <li>
              <a href="Community" target="_blank" rel="noreferrer">
                <Text as="p" className="tracking-[0.07px]">
                  Community
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-[30%] md:w-full gap-[47px]">
          <div className="flex flex-col items-start gap-[15px]">
            <Heading size="s" as="p" className="tracking-[0.07px]">
              Social Media
            </Heading>
            <div className="flex self-stretch justify-between items-center gap-5">
              <Button color="blue_gray_50" size="xs" shape="circle" className="w-[24px] !rounded-[12px]">
                <Img src="images/img_104498_facebook_icon.svg" />
              </Button>
              <Button color="blue_gray_50" size="xs" shape="circle" className="w-[24px] !rounded-[12px]">
                <Img src="images/img_5296514_bird_tw.svg" />
              </Button>
              <Button color="blue_gray_50" size="xs" shape="circle" className="w-[24px] !rounded-[12px]">
                <Img src="images/img_5335781_camera.svg" />
              </Button>
              <Button color="blue_gray_50" size="xs" shape="circle" className="w-[24px] !rounded-[12px]">
                <Img src="images/img_5279116_pin_pin.svg" />
              </Button>
              <Button color="blue_gray_50" size="xs" shape="circle" className="w-[24px] !rounded-[12px]">
                <Img src="images/img_843777_google_g.svg" />
              </Button>
              <Button color="blue_gray_50" size="xs" shape="circle" className="w-[24px] !rounded-[12px]">
                <Img src="images/img_overflow_menu.svg" />
              </Button>
              <Button color="blue_gray_50" size="xs" shape="circle" className="w-[24px] !rounded-[12px]">
                <Img src="images/img_4375108_logo_telegram_icon.svg" />
              </Button>
              <div className="flex flex-col">
                <div className="flex flex-col items-center justify-center p-1 bg-blue_gray-50 rounded-[12px]">
                  <Img src="images/img_lock.svg" alt="lock_one" className="h-[12px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[15px]">
            <Heading size="s" as="p" className="tracking-[0.07px]">
              Invite Friends
            </Heading>
            <Input
              shape="round"
              name="email"
              placeholder={`Email ID`}
              className="self-stretch gap-[35px] border-deep_purple-400"
            />
          </div>
        </div>
      </div>
      <div className="flex self-stretch justify-center p-[27px] sm:p-5 bg-gray-100">
        <Text as="p" className="self-end tracking-[0.07px] !font-medium">
          © Purple Cues Private Limited
        </Text>
      </div>
    </footer>
  );
}
