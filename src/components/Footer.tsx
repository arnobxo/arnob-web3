"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div
      className={`bg-mydark  min-h-[49px] pb-[54px] ${
        pathname.includes("/studio") ? "hidden z-0" : ""
      }`}
    >
      <div className=" max-w-[1324px] overflow-x-hidden  mx-auto  hidden lg:block px-[16px] 2xl:px-0">
        <div className="flex justify-between  items-center flex-wrap">
          <div>
            <p className="text-[#717F8E] text-[15px]  font-light font-aeonik">
              ©2023 Arnob Chakma. All rights reserved.
            </p>
          </div>
          <div className="uppercase flex flex-wrap gap-4 text-[17px] font-normal font-aeonik">
            <a href="https://www.behance.net/arnobchakma11" target="_blank">
              <div className="flex items-center gap-[8px] group cursor-pointer hover:text-primary">
                Behance
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 13"
                  className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.40322 0.4L4.30334 0.399928L4.30315 0.499814L4.30229 0.963426L4.3021 1.06377L4.40245 1.06361L12.0832 1.0513L0.974217 12.0142L0.974216 12.0142L0.97377 12.0146L0.929312 12.059L0.860093 12.1282L0.927753 12.1989L1.28207 12.5691L1.35272 12.643L1.425 12.5707L12.4481 1.55501L12.4361 9.09176L12.4359 9.19211L12.5363 9.19192L13.0002 9.19106L13.1001 9.19088L13.1 9.09099L13.0938 0.506142L13.0937 0.406286L12.9939 0.406214L4.40322 0.4Z"
                    fill="#CCDAE7"
                    stroke="#CCDAE7"
                    className="group-hover:fill-primary transition"
                    strokeWidth="0.2"
                  />
                </svg>
              </div>
            </a>
            <a href="https://twitter.com/arnobchakma11" target="_blank">
              <div className="flex items-center gap-[8px] group cursor-pointer hover:text-primary">
                Twitter
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 13"
                  className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.40322 0.4L4.30334 0.399928L4.30315 0.499814L4.30229 0.963426L4.3021 1.06377L4.40245 1.06361L12.0832 1.0513L0.974217 12.0142L0.974216 12.0142L0.97377 12.0146L0.929312 12.059L0.860093 12.1282L0.927753 12.1989L1.28207 12.5691L1.35272 12.643L1.425 12.5707L12.4481 1.55501L12.4361 9.09176L12.4359 9.19211L12.5363 9.19192L13.0002 9.19106L13.1001 9.19088L13.1 9.09099L13.0938 0.506142L13.0937 0.406286L12.9939 0.406214L4.40322 0.4Z"
                    fill="#CCDAE7"
                    stroke="#CCDAE7"
                    className="group-hover:fill-primary transition"
                    strokeWidth="0.2"
                  />
                </svg>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/atarnob/" target="_blank">
              <div className="flex items-center gap-[8px] group cursor-pointer hover:text-primary">
                Linkedin
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 13"
                  className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.40322 0.4L4.30334 0.399928L4.30315 0.499814L4.30229 0.963426L4.3021 1.06377L4.40245 1.06361L12.0832 1.0513L0.974217 12.0142L0.974216 12.0142L0.97377 12.0146L0.929312 12.059L0.860093 12.1282L0.927753 12.1989L1.28207 12.5691L1.35272 12.643L1.425 12.5707L12.4481 1.55501L12.4361 9.09176L12.4359 9.19211L12.5363 9.19192L13.0002 9.19106L13.1001 9.19088L13.1 9.09099L13.0938 0.506142L13.0937 0.406286L12.9939 0.406214L4.40322 0.4Z"
                    fill="#CCDAE7"
                    stroke="#CCDAE7"
                    className="group-hover:fill-primary transition"
                    strokeWidth="0.2"
                  />
                </svg>
              </div>
            </a>
            <a href="https://dribbble.com/arnobchakma11" target="_blank">
              <div className="flex items-center gap-[8px] group cursor-pointer hover:text-primary">
                Dribble
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 13"
                  className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.40322 0.4L4.30334 0.399928L4.30315 0.499814L4.30229 0.963426L4.3021 1.06377L4.40245 1.06361L12.0832 1.0513L0.974217 12.0142L0.974216 12.0142L0.97377 12.0146L0.929312 12.059L0.860093 12.1282L0.927753 12.1989L1.28207 12.5691L1.35272 12.643L1.425 12.5707L12.4481 1.55501L12.4361 9.09176L12.4359 9.19211L12.5363 9.19192L13.0002 9.19106L13.1001 9.19088L13.1 9.09099L13.0938 0.506142L13.0937 0.406286L12.9939 0.406214L4.40322 0.4Z"
                    fill="#CCDAE7"
                    stroke="#CCDAE7"
                    className="group-hover:fill-primary transition"
                    strokeWidth="0.2"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div>
           <a href="https://t.me/atarnobx" target="_blank">
           <button className="group bg-primary w-[134px] h-[48px] rounded-full font-aeonik font-normal flex gap-2 items-center justify-center text-[#E8F1F8]">
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition"
              >
                <path
                  d="M19.6223 1.09254C19.2812 0.809869 18.7453 0.769425 18.1913 0.986759H18.1904C17.6077 1.2152 1.69614 7.88367 1.0484 8.15611C0.930588 8.19611 -0.09834 8.57123 0.00764594 9.40678C0.10226 10.1601 0.929223 10.4721 1.03021 10.5081L5.07541 11.8615C5.34379 12.7343 6.33314 15.9548 6.55194 16.6428C6.6884 17.0717 6.91083 17.6353 7.30066 17.7513C7.64273 17.8801 7.98298 17.7624 8.20314 17.5935L10.6763 15.3521L14.6687 18.3944L14.7638 18.4499C15.0349 18.5673 15.2946 18.6259 15.5425 18.6259C15.7341 18.6259 15.9178 18.5908 16.0934 18.5206C16.6916 18.2806 16.9308 17.7237 16.9558 17.6606L19.938 2.51521C20.12 1.70632 19.8671 1.29476 19.6223 1.09254ZM8.643 12.4028L7.27837 15.9584L5.91375 11.5139L16.3759 3.95832L8.643 12.4028Z"
                  fill="#E8F1F8"
                />
              </svg>
              Telegram
            </button>
           </a>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="max-w-6xl mx-auto py-4 lg:hidden px-[16px] 2xl:px-0">
        <div className="grid grid-cols-2">
          <div className="uppercase grid grid-cols-1 gap-5 text-sm font-aeonik text-[15px] font-medium">
            <a href="https://www.behance.net/arnobchakma11" target="_blank">
              <div className="flex items-center gap-[6px] group cursor-pointer hover:text-primary ">
                Behance
                <Image
                  src={"/footer-arrow.svg"}
                  alt="star"
                  width={18}
                  height={13}
                />
              </div>
            </a>
            <a href="https://twitter.com/arnobchakma11" target="_blank">
              <div className="flex items-center gap-[6px] group cursor-pointer hover:text-primary">
                Twitter
                <Image
                  src={"/footer-arrow.svg"}
                  alt="star"
                  width={18}
                  height={13}
                />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/atarnob/" target="_blank">
              <div className="flex items-center gap-[6px] group cursor-pointer hover:text-primary ">
                Linkedin
                <Image
                  src={"/footer-arrow.svg"}
                  alt="star"
                  width={18}
                  height={13}
                />
              </div>
            </a>
            <a href="https://dribbble.com/arnobchakma11" target="_blank">
              <div className="flex items-center gap-[6px] group cursor-pointer hover:text-primary ">
                Dribble
                <Image
                  src={"/footer-arrow.svg"}
                  alt="star"
                  width={18}
                  height={13}
                />
              </div>
            </a>
          </div>

          <div className="flex flex-col justify-between items-center md:items-end gap-10">
            <div className="flex justify-end md:justify-end w-full">
            
            <a href="https://t.me/atarnobx">
            <button className="bg-primary w-[134px] h-[48px] rounded-full font-normal flex gap-2 items-center font-aeonik text-[16px] justify-center  text-[#E8F1F8]">
                <Image
                  src={"/telegram.svg"}
                  width={20}
                  height={17}
                  alt="telegram"
                />{" "}
                Telegram
              </button>
            </a>
            </div>
            <div>
              <p className="text-[#717F8E] font-light text-[10px] text-right">
                ©2023 Arnob Chakma. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
