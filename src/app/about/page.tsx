"use client"

import * as React from "react";
import { Navigation } from "../../components/Navigation";
import { SoftwareList } from "../../components/SoftwareList";
import { SkillList } from "../../components/SkillList";
import { SocialLinks } from "../../components/SocialLinks";
import { SectionHeading } from "../../components/SectionHeadings";
import { navigationItems, socialLinks } from "../projectData";
import { softwareItems, skillItems,} from "../contents";
import { motion } from 'framer-motion';
import { footerVariants, staggerContainer, navVariants, fadeIn } from "@/utils/motion";

export default function About() {
  return (
    <main className="flex flex-col items-center px-20 overflow-hidden pt-28 pb-7 bg-zinc-100 max-md:px-5 max-md:pt-24">
      <div className="flex flex-col items-start ml-5 w-full max-w-[1161px] max-md:max-w-full">
        <motion.header variants={navVariants} initial="hidden" whileInView="show" className="flex flex-wrap items-start justify-between w-full gap-5 text-xl font-medium leading-tight tracking-tighter whitespace-nowrap text-neutral-900 max-md:mr-1 max-md:max-w-full">  
          <div className="text-2xl font-bold text-indigo-800"><a href="/">Uswaaa.</a></div>
          <Navigation items={navigationItems} />
        </motion.header>

            <motion.section variants={staggerContainer({ staggerChildren: 0.1 })} initial="hidden" whileInView="show" className="mt-56 w-full max-w-[1120px] max-md:mt-10 max-md:max-w-full">
              <motion.div variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.2, duration: 1 })} className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-6xl font-medium tracking-tighter leading-[58px] text-neutral-900 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                      Hi, I'm Uswatun Hasanah, Map Enthusiast & GIS Specialist.
                    </h1>
                    <div className="text-3xl leading-9 tracking-tighter mt-14 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                      My work is centered around creating impactful maps and leveraging geographic information systems (GIS) to address complex spatial challenges. I am passionate about exploring how geospatial data can tell stories, guide decision-making, and drive sustainable solutions.
                      <br /><br />
                      Currently, I am pursuing a master's degree in Geomatics Engineering at Universitas Gadjah Mada, where I explore advanced geospatial technologies and their applications in urban planning, disaster risk management, and environmental sustainability.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8822ea330618c136a22deec3b4f681cb137d9b20fd62143e0eb3ad5d03611bfd?placeholderIfAbsent=true&apiKey=198cb895976944b4a234b85e05ffd29d"
                    alt="Uswatun Hasanah Portrait"
                    className="object-contain self-stretch my-auto w-full aspect-[0.71] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </motion.div>
            </motion.section>
            
            <motion.section variants={staggerContainer({ staggerChildren: 0.1 })} initial="hidden" whileInView="show" className="flex flex-col md:flex-row gap-10 mt-9 max-w-full text-lg tracking-tight leading-none text-neutral-900 w-full md:w-[503px]" aria-labelledby="software-heading">
              <SectionHeading id="software-heading">Main Software</SectionHeading>
              <SoftwareList items={softwareItems} />
            </motion.section>

          <motion.section variants={staggerContainer({ staggerChildren: 0.1 })} className="mt-20 max-w-full w-[623px] max-md:mt-10" aria-labelledby="skills-heading">
            <motion.div className="flex gap-5 max-md:flex-col" variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.2, duration: 1 })}>
                <SectionHeading id="skills-heading">Main Skills</SectionHeading>
                <div className="ml-5 w-[84%] max-md:ml-0 max-md:w-full">
                  <SkillList items={skillItems} />
                </div>
            </motion.div>
          </motion.section>

        <hr className="flex shrink-0 mt-20 max-w-full h-0.5 bg-neutral-900 w-[1120px] max-md:mt-10" />
        <motion.section variants={footerVariants} initial="hidden" whileInView="show" className="flex flex-wrap self-stretch justify-between gap-5 mt-16 text-3xl tracking-tighter text-neutral-900 max-md:mt-10 max-md:max-w-full">
              <h2 className="leading-9">Let's collaborate on your next geospatial project</h2>
              <a href="mailto:uswatunhasanahrahman@gmail.com" className="self-start leading-none max-md:max-w-full">
                uswatunhasanahrahman@gmail.com
              </a>
        </motion.section>

        {/* <a href="#" className="self-center mt-1 text-lg leading-none tracking-tight ml-36 text-neutral-900">
          View Resume
        </a> */}

        <motion.footer variants={footerVariants} initial="hidden" whileInView="show" id="contact" className="flex flex-wrap items-start justify-between w-full gap-5 px-px py-1 my-8 text-xl font-medium leading-6 tracking-tighter max-md:mt-10 max-md:max-w-full">          
          <div className="text-indigo-800">
            Uswatun Hasanah ⏤ 2025
          </div>
          <SocialLinks links={socialLinks} />
        </motion.footer>
        
        {/* <footer className="flex flex-wrap gap-5 justify-between items-start px-px py-1 mt-28 w-full text-xl font-medium tracking-tighter max-w-[1105px] max-md:mt-10 max-md:max-w-full">
          <div className="leading-6 text-indigo-800">
            Uswatun Hasanah ⏤ 2025
          </div>
          <SocialLinks links={socialLinks} />
        </footer> */}
      </div>
    </main>
  );
};