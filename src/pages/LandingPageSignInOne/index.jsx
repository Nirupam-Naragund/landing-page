import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, CheckBox, Input } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import LandingPageSignInColumnaddlandin from "../../components/LandingPageSignInColumnaddlandin";
import LandingPageSignInConnectwith from "../../components/LandingPageSignInConnectwith";
import LandingPageSignInSigninjoinin from "../../components/LandingPageSignInSigninjoinin";

export default function LandingPageSignInOnePage() {
  return (
    <>
      <Helmet>
        <title>Nnn's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <Header1 className="p-2.5 bg-white-A700 shadow-xs" />
        <div className="mt-1.5">
          <div>
            <div>
              <div className="flex md:flex-col justify-between items-start pt-[100px] gap-5 px-[100px] md:pt-5 md:px-5 z-[1] bg-gray-100">
                <div className="flex flex-col w-[57%] md:w-full mt-[3px] gap-20 md:gap-[60px] sm:gap-10">
                  <div className="flex flex-col items-start">
                    <Heading size="2xl" as="h1" className="!text-black-900_01 tracking-[0.72px]">
                      <span className="text-black-900_01 italic">Explore your</span>
                      <span className="text-light_blue-700 italic">&nbsp;</span>
                      <span className="text-light_blue-700 italic">hobby</span>
                      <span className="text-black-900_01 italic">&nbsp;or&nbsp;</span>
                      <span className="text-deep_purple-400 italic">passion</span>
                    </Heading>
                    <Text as="p" className="mt-7 !text-black-900_01 tracking-[0.28px] !font-light leading-[30px]">
                      Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
                      suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be
                      about visual or performing arts, sports, games, gardening, model making, cooking, indoor or
                      outdoor activities…
                    </Text>
                    <Text as="p" className="mt-4 !text-black-900_01 tracking-[0.28px] !font-light leading-[30px]">
                      If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
                      products, services or events. Hop on your hobbyhorse and enjoy the ride.
                    </Text>
                  </div>
                  <div className="flex md:flex-col gap-3.5">
                    <Img src="images/img_5793404_1.svg" alt="image_one" className="h-[216px] md:w-full" />
                    <Img src="images/img_5793401_1.svg" alt="image_two" className="h-[216px] md:w-full" />
                  </div>
                </div>
                <div className="flex flex-col w-[33%] md:w-full mt-0.5 gap-8">
                  <LandingPageSignInSigninjoinin className="flex justify-between items-center w-[41%] md:w-full gap-5" />
                  <div className="flex flex-col gap-[27px]">
                    <div className="flex flex-col gap-4">
                      <Button
                        color="gray_100"
                        shape="round"
                        leftIcon={<Img src="images/img_google.svg" alt="google" />}
                        className="w-full gap-[35px] sm:px-5 font-semibold border-deep_purple-400 border border-solid"
                      >
                        Continue with Google
                      </Button>
                      <Button
                        color="gray_100"
                        shape="round"
                        leftIcon={<Img src="images/img_facebook.svg" alt="facebook" />}
                        className="w-full gap-[35px] sm:px-5 font-semibold border-deep_purple-400 border border-solid"
                      >
                        Continue with Facebook
                      </Button>
                    </div>
                    <LandingPageSignInConnectwith className="flex sm:flex-col items-end gap-2" />
                    <div className="flex flex-col gap-[22px]">
                      <div className="flex flex-col gap-4">
                        <Input
                          shape="round"
                          type="email"
                          name="email"
                          placeholder={`Email`}
                          className="sm:pr-5 border-blue_gray-50"
                        />
                        <Input
                          shape="round"
                          type="password"
                          name="password"
                          placeholder={`Password`}
                          suffix={<Img src="images/img_password.svg" alt="Password" />}
                          className="gap-[35px] border-blue_gray-50"
                        />
                      </div>
                      <div className="flex flex-col gap-[21px]">
                        <div className="flex justify-between gap-5">
                          <CheckBox
                            name="rememberme"
                            label="Remember me"
                            id="rememberme"
                            className="self-start gap-2 text-black-900_01 text-left text-xs"
                          />
                          <div className="flex self-end items-center gap-[7px]">
                            <Img
                              src="images/img_lock_black_24dp.svg"
                              alt="lockblack24dp"
                              className="self-start h-[16px] w-[15px]"
                            />
                            <a href="#">
                              <Text size="s" as="p" className="!text-black-900_01">
                                Forgot password?
                              </Text>
                            </a>
                          </div>
                        </div>
                        <Button
                          color="black_900_01"
                          variant="outline"
                          shape="round"
                          className="w-full sm:px-5 font-semibold"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center mt-[-6px] gap-6 grid-cols-[repeat(auto-fill,_minmax(528px_,_1fr))] p-[100px] md:p-5 relative bg-white-A700 grid">
                <div className="flex flex-col items-start w-full gap-[27px] p-10 sm:p-5 border-blue_gray-100 border border-solid bg-white-A700 rounded-lg">
                  <div className="flex items-center ml-1 gap-6 md:ml-0">
                    <Img src="images/img_groups_black_24dp.svg" alt="people_one" className="h-[40px] w-[40px]" />
                    <Heading as="h2" className="self-end !text-black-900_01">
                      People
                    </Heading>
                  </div>
                  <Text size="lg" as="p" className="ml-1 md:ml-0 !text-black-900_01">
                    Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate,
                    accompanist or collaborator.
                  </Text>
                  <Button
                    shape="round"
                    className="ml-1 md:ml-0 sm:px-5 font-semibold border-deep_purple-400 border border-solid min-w-[122px]"
                  >
                    Connect
                  </Button>
                </div>
                <div className="flex flex-col items-start w-full gap-7 p-10 sm:p-5 border-blue_gray-100 border border-solid bg-white-A700 rounded-lg">
                  <div className="flex items-center ml-1 gap-6 md:ml-0">
                    <Img
                      src="images/img_location_on_black_24dp.svg"
                      alt="locationon_one"
                      className="h-[40px] w-[40px]"
                    />
                    <Heading as="h3" className="self-start !text-black-900_01">
                      Place
                    </Heading>
                  </div>
                  <Text size="lg" as="p" className="ml-1 md:ml-0 !text-black-900_01">
                    Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues
                    that allow booking through hobbycue.
                  </Text>
                  <Button
                    shape="round"
                    className="ml-1 md:ml-0 sm:px-5 font-semibold border-deep_purple-400 border border-solid min-w-[122px]"
                  >
                    Meet up
                  </Button>
                </div>
                <div className="flex flex-col items-start w-full gap-7 p-10 sm:p-5 border-blue_gray-100 border border-solid bg-white-A700 rounded-lg">
                  <div className="flex items-center ml-1 gap-6 md:ml-0">
                    <Img
                      src="images/img_shopping_basket_black_24dp.svg"
                      alt="shoppingbasket"
                      className="h-[40px] w-[40px]"
                    />
                    <Heading as="h4" className="self-start !text-black-900_01">
                      Product
                    </Heading>
                  </div>
                  <Text size="lg" as="p" className="ml-1 md:ml-0 !text-black-900_01">
                    Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or
                    from community members.
                  </Text>
                  <Button
                    shape="round"
                    className="ml-1 md:ml-0 sm:px-5 font-semibold border-deep_purple-400 border border-solid min-w-[122px]"
                  >
                    Get it
                  </Button>
                </div>
                <div className="flex flex-col items-start w-full p-10 sm:p-5 border-blue_gray-100 border border-solid bg-white-A700 rounded-lg">
                  <div className="flex items-center ml-1 gap-6 md:ml-0">
                    <Img src="images/img_program.svg" alt="eventavailable" className="h-[40px] w-[40px]" />
                    <Heading as="h5" className="self-end !text-black-900_01">
                      Program
                    </Heading>
                  </div>
                  <Text size="lg" as="p" className="mt-[23px] ml-1 md:ml-0 !text-black-900_01">
                    Find events, meetups and workshops related to your hobby. Register or buy tickets online.
                  </Text>
                  <Button
                    shape="round"
                    className="mt-[59px] ml-1 md:ml-0 sm:px-5 font-semibold border-deep_purple-400 border border-solid min-w-[121px]"
                  >
                    Attend
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-[-16px] relative">
              <div className="h-[530px] md:h-auto py-4 bg-white-A700 relative">
                <div className="flex flex-col items-center w-full gap-[75px] p-10 md:gap-14 md:p-5 sm:gap-[37px] border-blue_gray-100 border border-solid bg-white-A700 max-w-[1240px] rounded-lg">
                  <div className="flex w-[28%] md:w-full gap-4">
                    <Img
                      src="images/img_add_light_blue_700.svg"
                      alt="add_one"
                      className="self-start h-[54px] w-[54px]"
                    />
                    <Heading size="2xl" as="h6" className="self-end">
                      Add your own
                    </Heading>
                  </div>
                  <div className="flex flex-col self-stretch items-start gap-4">
                    <Text size="lg" as="p" className="tracking-[0.36px] leading-[30px]">
                      Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you
                      know someone who should be on hobbycue? Go ahead and Add your Own page
                    </Text>
                    <Button
                      shape="round"
                      className="sm:px-5 font-semibold border-deep_purple-400 border border-solid min-w-[122px]"
                    >
                      Add new
                    </Button>
                  </div>
                </div>
                <div className="w-full h-max left-0 bottom-0 right-0 top-0 px-14 py-[100px] m-auto md:p-5 bg-gray-50 absolute">
                  <LandingPageSignInColumnaddlandin className="flex flex-col items-start w-full gap-[31px] p-10 md:p-5 border-blue_gray-100 border border-solid bg-white-A700 max-w-[1240px] rounded-lg" />
                </div>
              </div>
              <div className="mt-[-33px] px-14 py-[100px] md:p-5 z-[1] relative bg-white-A700">
                <div className="flex flex-col w-full gap-9 p-10 mx-auto md:p-5 bg-gray-100 max-w-[1240px] rounded-lg">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col rotate-[180deg] bg-white-A700 rounded-[20px]">
                      <Img
                        src="images/img_user.svg"
                        alt="user_one"
                        className="h-[40px] rounded-tl-[20px] rounded-tr-[20px]"
                      />
                    </div>
                    <Heading as="h4" className="self-start">
                      Testimonials
                    </Heading>
                  </div>
                  <Text size="lg" as="p" className="!text-gray-600 tracking-[0.36px] leading-[30px]">
                    In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find
                    or connect with like minded people. Websites like hobbycue.com is a great service which helps me get
                    in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the
                    extra benefit of finding products and services that I can avail, which I can be assured is going to
                    be of great quality as it comes recommended by people of the hobbycue community. To have
                    discussions, to get visibility, and to be able to safely explore various hobbies and activities in
                    my city, all under one roof, is an excellent idea and I highly recommend it.
                  </Text>
                  <div className="flex md:flex-col justify-between gap-5">
                    <div className="flex justify-between items-start w-[67%] md:w-full gap-5 p-[19px] bg-deep_purple-100 rounded-lg">
                      <div className="flex justify-between items-center w-[13%] ml-[13px] gap-5 md:ml-0">
                        <Button size="md" shape="circle" className="w-[40px] !rounded-[20px]">
                          <Img src="images/img_play_arrow_black_24dp.svg" />
                        </Button>
                        <div className="h-[12px] w-[12px] bg-deep_purple-400 rounded-md" />
                      </div>
                      <div className="flex justify-between items-center w-[21%] mr-[13px] gap-5 md:mr-0">
                        <Text size="s" as="p" className="!text-deep_purple-400">
                          0:00
                        </Text>
                        <div className="flex justify-center items-center w-[49%]">
                          <Img
                            src="images/img_mic_black_24dp_1.svg"
                            alt="micblack24dp"
                            className="self-end h-[32px] w-[32px] z-[1]"
                          />
                          <Img
                            src="images/img_ellipse_26.png"
                            alt="circleimage"
                            className="h-[60px] w-[60px] ml-[-20px] relative rounded-[50%]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-[26%] md:w-full gap-6">
                      <Img
                        src="images/img_ellipse_12.png"
                        alt="circleimage_one"
                        className="h-[100px] w-[100px] rounded-[50%]"
                      />
                      <div className="flex flex-col items-start">
                        <Heading size="md" as="h6" className="!text-deep_purple-400 tracking-[0.36px]">
                          Shubha Nagarajan
                        </Heading>
                        <Text as="p" className="!text-light_blue-700 tracking-[0.28px]">
                          Classical Dancer
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end p-3.5 bg-gray-50">
            <div className="flex md:flex-col justify-between items-start w-full mt-[89px] gap-5 mx-auto max-w-7xl">
              <div className="flex flex-col items-start mb-1 gap-[26px]">
                <Text size="xl" as="p" className="!text-black-900_01 italic">
                  <span className="text-black-900_01">Your&nbsp;</span>
                  <span className="text-deep_purple-400">Hobby</span>
                  <span className="text-black-900_01">, Your&nbsp;</span>
                  <span className="text-light_blue-700">Community...</span>
                </Text>
                <Button color="deep_purple_400" size="lg" shape="round" className="font-semibold min-w-[147px]">
                  Get started
                </Button>
              </div>
              <Button size="md" shape="circle" className="w-[40px] shadow-sm !rounded-[20px]">
                <Img src="images/img_arrow_up.svg" />
              </Button>
            </div>
            <Text
              size="xs"
              as="p"
              className="flex self-end justify-center items-center h-[18px] mt-[7px] px-1 py-px !text-deep_purple-400 tracking-[0.40px] bg-white-A700 text-shadow-ts rounded-sm"
            >
              Go to top (Ctrl+Home)
            </Text>
            <Img
              src="images/img_group_99.svg"
              alt="image_three"
              className="h-[302px] w-full md:h-auto mt-[71px] mb-4 mx-auto max-w-[1240px]"
            />
          </div>
        </div>
        <Footer className="flex flex-col pt-[57px] gap-[57px] md:pt-5 sm:gap-7 bg-white-A700" />
      </div>
    </>
  );
}
