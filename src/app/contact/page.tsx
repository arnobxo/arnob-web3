"use client";

import { Controller, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useRef } from "react";

interface ContactForm {
  name: string;
  email: string;
  companyName: string;
  projectType: string[];
  budget: string;
  message: string;
}
const designOptions = [
  "Logo Design",
  "Logo + Identity",
  "Identity Redesign",
  "Web Illustration/Assets",
  "Social Media Post",
  "Pitch Deck Design",
  "Stationary Design",
  "3D Abstract Shapes",
  "Other",
];

const budgetOptions = ["$500 - $1K", "$1K - $2K", "$2K - $3K", ">$3K"];

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactForm>();

  const formRef = useRef(null);

  const sendEmail = async () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          toast.success("Quote has been sent. I will contact you very soon");
          reset();
        },
        (error) => {
          toast.error(
            error?.text || "Could not send your message. Please try again."
          );
        }
      );
  };

  return (
    <div className="min-h-screen bg-mydark ">
      <div className="max-w-[1324px] mx-auto px-[16px] 2xl:px-0  pt-[164px] lg:pt-[231px]  lg:pb-[310px] pb-[175px] ">
        <h2 className="hidden lg:block text-mygray font-baseNeue font-black text-[48px] leading-none uppercase text-center">
          bonjour! <br /> tell me about <br /> your idea
        </h2>
        <h2 className="lg:hidden text-mygray font-baseNeue font-black text-[32px] leading-none uppercase text-center">
          bonjour! <br /> tell me <br />  about your  idea
        </h2>
        <p className="hidden lg:block font-aeonik text-[18px] lg:text-xl font-light text-[#A7B5C4] text-center mt-[22px] md:mt-[38px]">
          Have A Project in Mind? Please Share More...
        </p>
        <p className="lg:hidden font-aeonik text-[18px] lg:text-xl font-light text-[#A7B5C4] text-center mt-[22px] md:mt-[38px]">
          Have A Project in Mind? <br /> Please Share More...
        </p>

        <form
          onSubmit={handleSubmit(sendEmail)}
          ref={formRef}
          className="mt-[114px]  max-w-[648px] mx-auto space-y-[45px] md:space-y-[42px] font-aeonik"
        >
          <div className="flex flex-col w-full">
            <label className="text-[18px] font-light text-mygray">Name</label>
            <input
              type="text"
              required
              {...register("name")}
              placeholder="Damien.."
              className="bg-transparent font-light border-gray-600 focus:placeholder:text-transparent border-b-[1px] mt-2  h-[70px] pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray font-light">Email Address</label>
            <input
              type="email"
              required
              {...register("email")}
              placeholder="Damien@gmail.com"
              className="bg-transparent font-light focus:placeholder:text-transparent border-b-[1px] mt-2 border-gray-600 h-[70px] pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray font-light">Company Name</label>
            <input
              type="text"
              required
              {...register("companyName")}
              placeholder="Damian Inc"
              className="bg-transparent font-light focus:placeholder:text-transparent border-b-[1px] mt-2 border-gray-600 h-[70px] pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray font-light">
              What’s On Your Mind?
            </label>
            <div className="mt-[27px] flex flex-wrap gap-y-[12px] gap-x-[9px] ">
              {designOptions.map((option) => (
                <Controller
                  key={option}
                  name="projectType"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <button
                      type="button"
                      className={`py-[14px] px-[21px] rounded-[26.5px] border font-light  ${
                        watch("projectType")?.includes(option)
                          ? "border-[#10355D] bg-[#092038]"
                          : "border-gray-600"
                      } text-mygray text-[16px] font-aeonik`}
                      onClick={() => {
                        const currentSelection = field.value || [];
                        const updatedSelection = currentSelection?.includes(
                          option
                        )
                          ? currentSelection.filter((item) => item !== option)
                          : [...currentSelection, option];
                        field.onChange(updatedSelection);
                      }}
                    >
                      {option}
                    </button>
                  )}
                />
              ))}

              <input
                type="text"
                value={watch("projectType") || ""}
                name="projectType2"
                className="hidden"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray font-light">
              How Much Your Budget Range?
            </label>
            <div className="mt-[27px] flex flex-wrap gap-y-[12px] gap-x-[9px]">
              {budgetOptions.map((option) => (
                <Controller
                  key={option}
                  name="budget"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <button
                      type="button"
                      className={`py-[14px] px-[21px] rounded-[26.5px] border font-light  ${
                        watch("budget") === option
                          ? "border-[#10355D] bg-[#092038]"
                          : "border-gray-600"
                      } text-mygray text-[16px] font-aeonik`}
                      onClick={() => field.onChange(option)}
                    >
                      {option}
                    </button>
                  )}
                />
              ))}
            </div>
            <input
              type="text"
              value={watch("budget") || ""}
              name="budget2"
              className="hidden"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray font-light">Message</label>
            <textarea
              rows={7}
              required
              {...register("message")}
              name="message"
              placeholder="I Want To Build.."
              className="bg-transparent font-light focus:placeholder:text-transparent border-b-[1px] mt-2 border-gray-600  pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]"
            ></textarea>
          </div>
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className=" w-[296px] h-[78px] md:w-[170px] bg-mylightgray text-mydark rounded-[39px] font-medium text-[22px] hover:bg-primary transition-all"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
