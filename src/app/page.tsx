"use client"

import * as React from "react";
import { Navigation } from "../components/Navigation";
import { ProjectCard } from "../components/ProjectCard";
import { SocialLinks } from "../components/SocialLinks";
import { projects, navigationItems, socialLinks } from "./projectData";

export default function Portfolio() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-11 bg-zinc-100 max-md:px-5 max-md:pt-24">
      <div className="flex flex-col w-full max-w-[1123px] max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between items-start w-full text-xl font-medium tracking-tighter leading-tight whitespace-nowrap text-neutral-900 max-md:mr-1 max-md:max-w-full">
          <div className="text-2xl font-bold text-indigo-800"><a href="/">Uswaaa.</a></div>
          <Navigation items={navigationItems} />
        </header>

        <section className="mt-64 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <h1 className="self-stretch my-auto text-6xl font-medium tracking-tighter leading-[58px] text-neutral-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Hello, I'm <br />
                Uswatun Hasanah.
              </h1>
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <p className="text-3xl tracking-tighter leading-9 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                A passionate map enthusiast who specializes in geographic
                information systems (GIS) and spatial data analysis. I enjoy
                exploring how maps can tell stories and solve real-world
                problems.
              </p>
            </div>
          </div>
        </section>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f363bc05db69966cf085455038dd70924561d0667e44f7437da650a98dca85c4?placeholderIfAbsent=true&apiKey=198cb895976944b4a234b85e05ffd29d"
          className="object-contain mt-16 aspect-[0.89] fill-neutral-900 w-[34px] max-md:mt-10"
          alt="Decorative element"
        />

        <section aria-label="Projects showcase">
          {projects.map((project, index) => (
            <React.Fragment key={project.number}>
              <ProjectCard {...project} />
              {index < projects.length - 1 && (
                <div className="shrink-0 mt-28 w-full h-px border-2 border-solid border-neutral-900 max-md:mt-10" role="separator" />
              )}
            </React.Fragment>
          ))}
        </section>

        <footer id="contact" className="flex flex-wrap gap-5 justify-between items-start px-px py-1 mt-48 w-full text-xl font-medium tracking-tighter leading-6 max-md:mt-10 max-md:max-w-full">
          <div className="text-indigo-800">
            Uswatun Hasanah ⏤ 2025
          </div>
          <SocialLinks links={socialLinks} />
        </footer>
      </div>
    </main>
  );
};