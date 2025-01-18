"use client"

import * as React from "react";
import { Navigation } from "../../components/Navigation";
import { SocialLinks } from "../../components/SocialLinks";
import { navigationItems, socialLinks } from "../projectData";

export default function About() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-7 bg-zinc-100 max-md:px-5 max-md:pt-24">
      <div className="flex flex-col items-start ml-5 w-full max-w-[1161px] max-md:max-w-full">
        <nav className="flex flex-wrap gap-5 justify-between items-start w-full text-xl font-medium tracking-tighter leading-tight whitespace-nowrap max-w-[1120px] text-neutral-900 max-md:max-w-full">
          <div className="text-2xl font-bold text-indigo-800"><a href="/">Uswaaa.</a></div>
          <Navigation items={navigationItems} />
        </nav>

        <section className="mt-56 w-full max-w-[1120px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <h1 className="text-6xl font-medium tracking-tighter leading-[58px] text-neutral-900 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Got Questions or Ideas? Let’s Collaborate!
                </h1>
                <div className="mt-14 text-3xl tracking-tighter leading-9 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                  Whether it's about geomatics, research, or just a friendly chat, I’d love to hear from you. Your thoughts matter! Let’s build something amazing together
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="flex shrink-0 mt-20 max-w-full h-0.5 bg-neutral-900 w-[1120px] max-md:mt-10" />

        <section className="flex flex-wrap gap-5 justify-between self-stretch mt-16 text-3xl tracking-tighter text-neutral-900 max-md:mt-10 max-md:max-w-full">
          <h2 className="leading-9">Let's collaborate on your next geospatial project</h2>
          <a href="mailto:uswatunhasanahrahman@gmail.com" className="self-start leading-none max-md:max-w-full">
            uswatunhasanahrahman@gmail.com
          </a>
        </section>

        {/* <a href="#" className="self-center mt-1 ml-36 text-lg tracking-tight leading-none text-neutral-900">
          View Resume
        </a> */}

        <footer className="flex flex-wrap gap-5 justify-between items-start px-px py-1 mt-28 w-full text-xl font-medium tracking-tighter max-w-[1105px] max-md:mt-10 max-md:max-w-full">
          <div className="leading-6 text-indigo-800">
            Uswatun Hasanah ⏤ 2025
          </div>
          <SocialLinks links={socialLinks} />
        </footer>
      </div>
    </main>
  );
};