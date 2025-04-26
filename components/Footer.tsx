"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { profile } from "console";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          想要<span className="text-purple">瞭解我</span>更多嗎？
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          直接聯絡我吧！
        </p>
        <a href="mailto:altonchai@gmail.com">
          <MagicButton
            title="Email Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              onClick={() => window.open(profile.link, "_blank")}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Alton Chai
        </p>
      </div>
    </footer>
  );
};

export default Footer;
