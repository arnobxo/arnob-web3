"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <>
    <div
      className={`bg-mydark w-full overflow-x-hidden z-40  font-aeonik font-normal fixed ${
        pathname.includes("/studio") && "hidden z-0"
      }`}
      ref={navbarRef}
    >
      <div className="max-w-[1324px] h-[80px] px-[16px] 2xl:px-0 text-[15px] mx-auto flex justify-between items-center text-mygray overflow-x-hidden ">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={72}
            height={39}
            alt="arnob chakma"
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden md:flex gap-8 items-center list-none">
          <Link className="hover:text-primary transition-colors" href={"/"}>
            <li>WORK</li>
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href={"/thoughts"}
          >
            <li>THOUGHTS</li>
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href={"/aboutme"}
          >
            <li>ABOUT ME</li>
          </Link>

          <Link
            className="hover:text-primary transition-colors"
            href={"/contact"}
          >
            <li>CONTACT</li>
          </Link>
      <a href="https://t.me/atarnobx" target="_blank">
      <button className="group bg-primary w-[134px] h-[48px] font-normal rounded-full flex gap-2 items-center justify-center text-[#E8F1F8]">
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

      

        {navOpen ? (
          <X
            width={35}
            onClick={() => setNavOpen(!navOpen)}
            height={35}
            className="md:hidden cursor-pointer z-50 fixed right-6"
          />
        ) : (
          <Image
            src={"/hamburger.svg"}
            width={35}
            onClick={() => setNavOpen(!navOpen)}
            height={35}
            alt="hamburger"
            className="md:hidden cursor-pointer z-50"
          />
        )}
      </div>
    </div>
      <div
      className={`fixed w-full h-full md:hidden   opacity-0 font-aeonik transition-all animate-fade animate-ease-in-out ${
        navOpen
          ? "translate-x-0 opacity-100 block "
          : "transform  opacity-0 hidden"
      }  list-none bg-[#060A0E]  px-8 py-10 rounded-2xl z-[38] flex justify-center items-center`}
    >
      <div className="flex flex-col gap-[12px] text-center text-[32px] font-normal justify-center items-center animate-fade-up animate-ease-in-out animate-delay-200">
        <Link className="hover:text-primary transition-colors" href={"/"}>
          <li>WORK</li>
        </Link>
        <Link
          className="hover:text-primary transition-colors"
          href={"/thoughts"}
        >
          <li>THOUGHTS</li>
        </Link>
        <Link
          className="hover:text-primary transition-colors"
          href={"/aboutme"}
        >
          <li>ABOUT ME</li>
        </Link>

        <Link
          className="hover:text-primary transition-colors"
          href={"/contact"}
        >
          <li>CONTACT</li>
        </Link>
     <a href="https://t.me/atarnobx" target="_blank">
     <button className="bg-primary text-center mt-[57px] w-[134px] h-[48px] font-normal text-[16px] rounded-full flex gap-2 items-center justify-center text-[#E8F1F8]">
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
    </div>
    </>
  );
};

export default Navbar;
